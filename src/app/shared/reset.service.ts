import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResetService {
  resetMirror() {
    this.http.delete('/api/picture').subscribe(res => { console.log(res);});
    }

  constructor(private http: HttpClient) { }

}
