import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageModel } from '../greeting/greeting.component';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor(private http: HttpClient) { }

  getJSONResponse(name: String) {
      var response;
      //https://saviya.herokuapp.com/greeting
      if (name == "") {
          response = this.http.get<MessageModel>('https://saviya.herokuapp.com/greeting');
          console.log("if hit");
      } else {
          response = this.http.get<MessageModel>('https://saviya.herokuapp.com/greeting?name='+name);
          console.log("else hit");
      }
    //console.log(response);
    return response;
  }
}
