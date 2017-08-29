import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ngx-socket-io';

import { SocketBroadcastType } from './socketBroadcast';

@Injectable()
export class SocketService {

  constructor(private socket: Socket) { }

  // phoneSocketId
  private phoneSocketId = null;

  getPhoneSocketId() {
    return this.phoneSocketId;
  }

  setPhoneSocketId(id) {
    this.phoneSocketId = id;
  }

  // Generates a random 4 digit code
  getCode() {
    return String(Math.floor(1000 + Math.random() * 9000));
  }

  // When the mirror generates a code, broadcast it so the
  // phone can find it
  sendMirrorCode(code) {
    this.socket.emit('mirror', code);
  }


  // This will send a message to a specific client.  Input:
  //  id - id of receiving client
  //  message - string, kind of message
  //  data - string or JSON with data
  sendSocketMessage(id, message, data) {
    let obj: SocketBroadcastType = {
      socketId: id,
      data: data,
      message: message
    };
    this.socket.emit('broadcast', obj);
  }

  getProblems() {
    let observable = new Observable(observer => {
      this.socket.on('problem', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    })

    return observable;
  }

  getConnect() {
    let observable = new Observable(observer => {
      this.socket.on('phoneConnected', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    })

    return observable;
  }

}
