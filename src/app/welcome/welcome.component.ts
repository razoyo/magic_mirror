import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() customerPresent: boolean;
  @Output() customerSessionStart = new EventEmitter<any>();
  @Output() scanCode = new EventEmitter<number>();

  scanInputOpen: boolean = false;
  barcodeToFind: number;

  customerPushedButton() {
    this.customerSessionStart.emit();
    }

  scanComplete(barcode) {
    this.scanCode.emit(barcode);
    }

  constructor() { }

  ngOnInit() {
  }

}
