import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor(private http: HttpClient) { }

  getJSONResponse() {
      //http://www.mocky.io/v2/5d57b98f2f0000d40c54548d
      //https://reqres.in/api/users
    var response = this.http.get('https://dahamv.free.beeceptor.com/my/api/path');
    //console.log(response);
    return response;
  }
}
