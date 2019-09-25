import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CurrentUserModel } from 'src/app/auth/current-user.model';
import { AlertService } from 'src/app/common/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  model : any={};

  errorMessage:string;
  constructor(private router:Router,private authService:AuthService, private alertService : AlertService) { }


  ngOnInit() {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/home']);
      } else {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('currentUserToken');
          localStorage.clear();
      }
  }

  loginAction(){
      //To remove old alerts.
    this.alertService.clearAlerts("loginAlert");
    this.authService.login(this.model).subscribe(
        res => {
            const currentUser = new CurrentUserModel();
            currentUser.username = this.model.username;
            currentUser.email = res.email;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.setItem('currentUserToken', res.token);
            this.router.navigate(['/home']);
            console.log('HTTP response', res);
            console.log('Current user model ', JSON.stringify(currentUser));
        },
        err => {
            console.log('HTTP Error', JSON.stringify(err));
            this.alertService.alertError("loginAlert","Can't login ! Error message : " + err.error.message);
        },
        () => {
            this.router.navigate(['/home']);
        }
      );
  }

 }
