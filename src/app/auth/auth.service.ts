import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    Url :string;
    token : string;
    header : any;

    constructor(private http : HttpClient, private jwtHelper: JwtHelperService, private router:Router) {

        this.Url = 'https://saviya-be-dev.herokuapp.com/';

        const headerSettings: {[name: string]: string | string[]; } = {};
        this.header = new HttpHeaders(headerSettings);
    }

    login(model : any){
        var a =this.Url+'authenticate';
        //return this.http.post<any>(this.Url+'authenticate',model,{ headers: this.header});
        const responseObservable : Observable<any> = this.http.post<any>(this.Url+'authenticate',model);
        return responseObservable;
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserToken');
        console.log("Logged out");
        this.router.navigateByUrl("/login");
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('currentUserToken')
        // TODO! Check whether the token is expired and return
        // true or false
         if(token !== null)
            return true;//!this.jwtHelper.isTokenExpired(token);
        else
            return false;

  }
}

