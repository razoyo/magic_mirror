import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoHandlerService {
  body = {
	  "directory":"customer-photos",
      "base_name":"hat-photo",
      "options" : {
	  	"rot":"180",
 		"quality":"100"
	  }
	};

	headers = new HttpHeaders().set("Content-Type", "application/json");

  //take a picture and return url to display on mirror
  getPhoto(): Observable<any> { 
    return this.http.post(
	  '/api/picture',
	  this.body,
      { "headers": this.headers }
	);
    }

  // share photos - send them to the mobile app

  constructor( private http: HttpClient ) {}

}
