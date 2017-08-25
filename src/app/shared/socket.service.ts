import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketService {

  constructor(private socket: Socket) { }

  getCode() {
    return String(Math.floor(1000 + Math.random() * 9000));
  }

  sendMirrorCode(code) {
    this.socket.emit('mirror', code);
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
