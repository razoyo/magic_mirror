import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { SocketService } from '../shared/socket.service';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css']
})
export class SyncComponent implements OnInit, OnDestroy {

  @Output() connectionMade = new EventEmitter<any>();
  code = '';
  feedback = '';
  problem = '';
  phoneSocketId;
  problemObserver;
  phoneObserver;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.problemObserver = this.socketService
      .getProblems()
      .subscribe((data) => {
        this.problem = String(data);
        this.phoneSocketId = null;
        this.feedback = '';
      });
    
    this.phoneObserver = this.socketService
      .getConnect()
      .subscribe((data) => {
        this.connectionMade.emit(data);
        this.phoneSocketId = data;
        this.socketService.setPhoneSocketId(this.phoneSocketId);
        this.feedback = 'The phone is connected';
        this.problem = '';
      });
  }

  getCode() {
    this.code = this.socketService.getCode();
    this.socketService.sendMirrorCode(this.code);
  }

  ngOnDestroy() {
    this.problemObserver.unsubscribe();
    this.phoneObserver.unsubscribe();
  }
}
