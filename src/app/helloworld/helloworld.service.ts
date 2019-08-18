import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor(private http: HttpClient) { }

  getJSONResponse() {
      //http://localhost:3000/greeting
    var response = this.http.get('https://dahamv.free.beeceptor.com/my/api/path');
    //console.log(response);
    return response;
  }
}
