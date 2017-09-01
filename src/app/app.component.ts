import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductLoaderService } from './shared/product-loader.service';  
import { PhotoHandlerService } from './shared/photo-handler.service';
import { ResetService } from './shared/reset.service';
import { SocketService } from './shared/socket.service';
import { SyncActionsService } from './shared/sync-actions.service';

import { ProductType } from './shared/product';
import { stateInit } from './shared/stateInit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PhotoHandlerService,
    ResetService,
	ProductLoaderService,
	SyncActionsService, 
    SocketService ],
})

export class AppComponent implements OnInit {
  currState: any;
  productEndpoint:string;

  takePhoto() {
    this.photoHandlerService.getPhoto().subscribe(photo => {
      if (!this.currState.photos) { 
          this.currState.photos = [ photo ] 
        } else {
          this.currState.photos.push(photo);
        }
      });
    }

  customerSessionStart() {
    this.currState.customer_present = true;
    }

  scanCode(barcode) {
	this.productLoaderService
		.loadProduct(barcode, this.productEndpoint)
		.subscribe(product => {
            if (product.name) {
              this.currState.product = product;
			  this.currState.product.error = false;
            } else {
              this.currState.product.error = true;  
            }
		});
    }

  connectionMade(data) {
    this.currState.socketId = data;
    this.currState.sync_status = "paired";
	this.syncActionsService[this.currState.post_sync_action](this.currState);
    }

  buyProduct() {
    if (this.currState.sync_status != 'paired') {
        this.currState.sync_status = 'pairing';
      }
    this.currState.post_sync_action = 'purchase'; 
	}

  sharePhotos() {
    if (this.currState.sync_status != 'paired') {
        this.currState.sync_status = 'pairing';
      }
    this.currState.post_sync_action = 'share'; 
    }

  reset() {
    console.log('state before init = \n',this.currState);
    this.resetService.resetMirror(this.currState.photos);
    this.currState = Object.create(stateInit);
    console.log('state = \n',this.currState);
    this.customerSessionStart();
    }

  constructor ( 
    private photoHandlerService: PhotoHandlerService, 
    private productLoaderService: ProductLoaderService, 
    private socketService: SocketService, 
    private syncActionsService: SyncActionsService, 
    private resetService: ResetService) { }

  ngOnInit() {
    this.currState = Object.create(stateInit);   
    this.currState.socketId = this.socketService.getPhoneSocketId();
    this.productEndpoint = this.currState.endpoint.get_product;
    }
}
