import { Component , Input } from '@angular/core';
import { Alert } from './alert.model'
import { AlertService } from './alert.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  @Input() id : String;

  public alerts : Alert[]=[];
  private alertObservable : Observable<Alert>;
  private alertObservableSubscription : Subscription;
  private clearAlertsObservable : Observable<String>;

  constructor(private alertService : AlertService) {

  }
  ngOnInit() {
    console.log("the id is "+this.id);
    this.alertObservable = this.alertService.getAlertObservableForId(this.id);
    this.alertObservableSubscription = this.alertObservable.subscribe(alert => {
      this.alerts.push(alert);
    })

    //This is to remove alerts when clearAlerts(id) method is called from the alert service.
    this.clearAlertsObservable = this.alertService.getClearAlertsObservable();
    this.clearAlertsObservable.subscribe(alertId => {
      this.alerts = this.alerts.filter(alert => alert.id !== alertId);
    })
  }

  ngOnDestroy() {
      this.alertObservableSubscription.unsubscribe();
  }
}