import { Component, OnInit } from '@angular/core';

import { ProductType } from './shared/product';

import { stateInit } from './shared/stateInit';

//mock data area
let photos = [
    "photo1.jpg",
    "photo2.jpg"
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

  customerSessionStart(value) {
    console.log("customer now present");
    this.currState.customer_present = value;
    }

  ngOnInit() {
    this.currState = Object.create(stateInit);   
    }
}

