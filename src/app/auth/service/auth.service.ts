import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Register } from "../registration/registration-model";
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

        const newlyCreatedResponseObservable = responseObservable.pipe(map(
            //This code block is called for every Json element (considered as a map element) in the response body.
            //In this case only once since the respnse has only one element( { "token" : "$jwt-token"} )
            data => {
            console.log("Token is : " + data.token);
            if (data && data.token) {
                localStorage.setItem('currentUsertoken', data.token);
                console.log("Token stored : " + data.token);
            }
            return data;
        }));
        //localStorage.setItem('currentUsertoken', "true");
        console.log("Logged in");
        return newlyCreatedResponseObservable;
    }

    logout() {
        localStorage.removeItem('currentUsertoken');
        console.log("Logged out");
        this.router.navigateByUrl("/login");
    }

    createUser(register:Register) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        var request = {
        "username": register.username,
        "password": register.password,
        }
        console.log("this is " + JSON.stringify(request));
        return this.http.post<Register[]>(this.Url + 'registration', request, httpOptions);
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('currentUsertoken')
        // Check whether the token is expired and return
        // true or false
         if(token !== null)
            return true;//!this.jwtHelper.isTokenExpired(token);
        else
            return false;

  }
}

