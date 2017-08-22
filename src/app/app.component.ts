import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PhotoHandlerService } from './shared/photo-handler.service';

import { ProductType } from './shared/product';

import { stateInit } from './shared/stateInit';

//mock data area

let fake_product = {
  name: "First Hat Selected",
  price: 9.99,
  sizes: [ { name:'S', url_key: 'small' },
           { name:'M', url_key: 'medium' },
           { name:'L', url_key: 'large'} ]
  };


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PhotoHandlerService],
})

export class AppComponent implements OnInit {
  product: ProductType = fake_product;
  currState: any;

  takePhoto() {
    this.photoHandlerService.getPhoto().subscribe(photo => this.currState.photos.push(photo['url']));
    }

  sharePhotos(photos) {
    console.log("share button pushed ", photos);
    }

  customerSessionStart() {
    console.log("customer now present");
    this.currState.customer_present = true;
    }

  scanCode(barcode) {
    console.log("barcode scan" , " " , barcode);
    this.currState.product_available = true;
    }

  constructor ( private photoHandlerService: PhotoHandlerService) {
    }


  ngOnInit() {
    this.currState = Object.create(stateInit);   
    }
}

