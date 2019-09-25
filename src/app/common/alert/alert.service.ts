import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert } from './alert.model';
import { filter } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();
    clearAlertsSubject : Subject<String> = new Subject();

    constructor() {}

    //Get the observable to subscribe to the corresponding alerts only <alert id="_id"></alert>
    public getAlertObservableForId(id : String) : Observable<Alert> {
        return this.alertSubject.pipe(filter(alert => alert.id == id));
    }

    public getClearAlertsObservable() : Observable<String>{
        return this.clearAlertsSubject.asObservable();
    }
    //Everything except this id
    public clearAlerts(id : String){
        return this.clearAlertsSubject.next(id);
    }

    public alertSuccess( id : String, message : String){
        this.alertSubject.next(new Alert(id, message,"alert-success"));
    }

    public alertInfo( id : String, message : String){
        this.alertSubject.next(new Alert(id, message,"alert-info"));
    }

    public alertWarning( id : String, message : String){
        this.alertSubject.next(new Alert(id, message,"alert-warning"));
    }

    public alertError( id : String, message : String){
        this.alertSubject.next(new Alert(id, message,"alert-danger"));
    }
}