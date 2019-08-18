import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageModel } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor(private http: HttpClient) { }

  getJSONResponse() {
      //http://localhost:3000/greeting
      //https://www.mocky.io/v2/5d57b98f2f0000d40c54548d
      //https://saviya.herokuapp.com/greeting
    var response = this.http.get<MessageModel>('https://saviya.herokuapp.com/greeting');
    //console.log(response);
    return response;
  }
}
