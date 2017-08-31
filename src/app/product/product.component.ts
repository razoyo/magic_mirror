import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductType } from '../shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', '../app.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;
  @Input() syncStatus: string;
  @Output() buyProduct = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();

  buyHat(name: string , url: string) {
    console.log('pushed by product ', url, name);
    this.buyProduct.emit({url, name });
    }

  mirrorReset() {
    this.reset.emit();
    }

  constructor() { }

  ngOnInit() {
  }

}
