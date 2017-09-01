import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SocketService } from './socket.service';

@Injectable()
export class SyncActionsService {

  purchase(state) {
    console.log('purchasing');
    if (state.socketId) {
      this.socketService.sendSocketMessage(
        state.socketId, 
        'purchase',
        { 'name':state.product.name,
          'url':state.product.product_url }
        );  
      } else {
        console.log('phone not paired');
      }
    }

  headers = new HttpHeaders().set("Content-Type","application/json");

  share(state) {
    this.http.put('/api/picture/customer-photos', null)
      .subscribe(data => {
         console.log('sharing');
         if (state.socketId) {
            this.socketService.sendSocketMessage(
            state.socketId,
            'newPictures',
             data['files']
            );  
        } else {
            console.log('phone not paired');
        }
      });
    }


  constructor( 
      private socketService: SocketService,
      private http: HttpClient ) { }

}
