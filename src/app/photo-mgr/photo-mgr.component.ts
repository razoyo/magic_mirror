import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photo-mgr',
  templateUrl: './photo-mgr.component.html',
  styleUrls: ['./photo-mgr.component.css', '../app.component.css']
})
export class PhotoMgrComponent implements OnInit {
  @Input() photos:string[];
  @Output() sharePhotos = new EventEmitter<any>();
  @Output() takePhoto = new EventEmitter<any>();

  pushTakePhoto() {
    this.takePhoto.emit();
    }

  pushSharePhotos() {
    this.sharePhotos.emit(this.photos);
    }

  constructor() { }

  ngOnInit() {
  }

}
