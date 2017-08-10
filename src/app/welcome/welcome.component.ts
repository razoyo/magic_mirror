import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Output() customerSessionStart = new EventEmitter<any>();
  @Output() scanCode = new EventEmitter<number>();
  customerPresent: boolean = false;

  scanInputOpen: boolean = false;
  barcodeToFind: number;

  customerPushedButton() {
    this.customerPresent = true;
    }

  customerApproachesMirror() {
    this.customerSessionStart.emit();
    }
  
  customerRequestedScan(e) {
    this.scanInputOpen = true;
  }

  scanComplete(barcode) {
    this.scanInputOpen = false;
    this.scanCode.emit(barcode);
    this.barcodeToFind = null;
    }


  constructor() { }

  ngOnInit() {
  }

}
