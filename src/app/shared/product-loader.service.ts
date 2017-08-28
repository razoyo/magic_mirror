import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ProductType } from '../shared/product';

import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

let mock_product = {
	"name":"testhat mock",
	"price": 25,
	"picture_url":"https://hats.razoyo.com/image.jpg",
	"product_url":"https://hats.razoyo.com/url_key"
  }	

@Injectable()
export class ProductLoaderService {

  loadProduct(barcode, endpoint): Observable<any> {
    console.log("http://".concat(endpoint,"/", barcode));
	return this.http.get("http://".concat(endpoint,"/", barcode));    
	//return Observable.of( mock_product )
	//.delay(1000);
	}


  constructor( private http : HttpClient ) { }

}
