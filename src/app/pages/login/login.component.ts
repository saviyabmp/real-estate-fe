import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  model : any={};

  errorMessage:string;
  constructor(private router:Router,private authService:AuthService) { }


  ngOnInit() {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/home']);
      } else {
        localStorage.removeItem('currentUsertoken');
        localStorage.clear();
      }
  }

  loginAction(){
    this.authService.login(this.model).subscribe(
        res => {
            this.router.navigate(['/home']);
            console.log('HTTP response', res);
        },
        err => console.log('HTTP Error', err),
        () => {
            this.router.navigate(['/home']);
        }
      );
  }

 }
