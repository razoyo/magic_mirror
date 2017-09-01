import { Injectable } from '@angular/core';

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
  
  share(state) {
    console.log('sharing');
    if (state.socketId) {
      this.socketService.sendSocketMessage(
        state.socketId,
        'newPictures',
        state.share
      );  
      } else {
        console.log('phone not paired');
      }
    }


  constructor( private socketService: SocketService ) { }

}
