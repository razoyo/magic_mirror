import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class PhotoHandlerService {

  //take a picture and return url to display on mirror
  getPhoto(): Observable<any> { return Observable.of(() => { return 'hat1.jpg' } ).delay(2000) };

  // share photos - send them to the mobile app


  constructor( private http: Http ) { }

}
