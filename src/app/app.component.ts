import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductLoaderService } from './shared/product-loader.service';  
import { PhotoHandlerService } from './shared/photo-handler.service';
import { ResetService } from './shared/reset.service';

import { ProductType } from './shared/product';

import { stateInit } from './shared/stateInit';

//mock data area

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PhotoHandlerService,
    ResetService,
	ProductLoaderService ],
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

  sharePhotos(photos) {
    console.log("share button pushed ", photos);
    }

  customerSessionStart() {
    this.currState.customer_present = true;
    }

  scanCode(barcode) {
	this.productLoaderService
		.loadProduct(barcode, this.productEndpoint)
		.subscribe(product => {
            console.log('product api returns \n',product);
			this.currState.product = product;
			this.currState.product_available = true;
		});
    }

  connectionMade(data) {
    this.currState.socketId = data;
    this.currState.sync_status = "paired";
    }

  buyProduct(product) {
	console.log('buying product in a.c\n',product.name, product.url);
    if (!(this.currState.sync_status === 'paired')) {
        this.currState.sync_status = 'pairing';
      }
	}

  reset() {
    this.resetService.resetMirror();
    this.currState = Object.create(stateInit);
    this.customerSessionStart();
    }

  constructor ( 
    private photoHandlerService: PhotoHandlerService, 
    private productLoaderService: ProductLoaderService, 
    private resetService: ResetService) { }


  ngOnInit() {
    this.currState = Object.create(stateInit);   
	this.productEndpoint = this.currState.endpoint.get_product;
    }
}

