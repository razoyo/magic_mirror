import { Component, OnInit } from '@angular/core';
import { SocketService } from '../shared/socket.service';

@Component({
  selector: 'app-photo-share',
  templateUrl: './photo-share.component.html',
  styleUrls: ['./photo-share.component.css']
})
export class PhotoShareComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit() {
  }

  newPictures(folder) {
    let data: any = {
      pictures: [folder + '/barcode8.jpg', folder + '/barcode9.jpg']
    };
    let phoneSocketId = this.socketService.getPhoneSocketId();
    if (phoneSocketId) {
      this.socketService.sendSocketMessage(
        phoneSocketId, 
        'newPictures',
        data
      );
    }
    else {
      console.log('phone not paired');
    }
  }

}
