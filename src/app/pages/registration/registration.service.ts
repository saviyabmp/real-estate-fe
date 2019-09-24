import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationModel } from './registration.model';

@Injectable({
    providedIn: 'root'
})

export class RegistrationService {

    Url :string;

    constructor(private http : HttpClient){
        this.Url = 'https://saviya-be-dev.herokuapp.com/';
    }

    addNewRegistration( registrationModel : RegistrationModel) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        var request = {
            "username": registrationModel.username,
            "password": registrationModel.password,
            "email" : registrationModel.email
        }
        console.log("this is " + JSON.stringify(request));
        return this.http.post<RegistrationModel[]>(this.Url + 'registration', request, httpOptions);
    }
}