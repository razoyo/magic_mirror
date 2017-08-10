import { Component, OnInit } from '@angular/core';

import { ProductType } from './shared/product';

import { stateInit } from './shared/stateInit';

//mock data area
let photos = [
    "hat1.jpg",
    "hat2.jpg"
  ];

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
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  photos:string[] = photos;
  product: ProductType = fake_product;
  currState: any;

  takePhoto() {
    console.log("photo button pushed");
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

  ngOnInit() {
    this.currState = Object.create(stateInit);   
    }
}

