import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductType } from '../shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', '../app.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;
  @Output() buyProduct = new EventEmitter<any>();

  pushBuyProduct(url: string) {
    console.log('pushed by product ', url);
    this.buyProduct.emit(url);
    }

  constructor() { }

  ngOnInit() {
  }

}
