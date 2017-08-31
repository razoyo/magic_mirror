import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResetService {
  resetMirror(photos) {
    if (photos) {
      this.http.delete('/api/picture/customer-photos').subscribe(res => { console.log(res);});
      }
    }
  constructor(private http: HttpClient) { }

}
