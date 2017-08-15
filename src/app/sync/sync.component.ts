import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService} from '../socket.service';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css']
})
export class SyncComponent implements OnInit, OnDestroy {

  code = '';
  problem = '';
  connect = '';
  problemObserver;
  phoneObserver;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.problemObserver = this.socketService
      .getProblems()
      .subscribe((data) => {
        this.problem = String(data);
      });
    
    this.phoneObserver = this.socketService
      .getConnect()
      .subscribe((data) => {
        this.connect = String(data);
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
