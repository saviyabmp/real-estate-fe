import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { CurrentUserModel } from './current-user.model';

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

            if (data && data.token) {
                const currentUser = new CurrentUserModel();
                //currentUser.token = data.token;

                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                localStorage.setItem('currentUserToken', data.token);
            }
            return data;
        }));
        return newlyCreatedResponseObservable;
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

