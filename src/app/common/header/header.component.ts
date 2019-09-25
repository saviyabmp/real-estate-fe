import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser;
  constructor(public authService: AuthService) {}

  ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser")).username;
  }

  isLoggedIn() : boolean {
    return this.authService.isAuthenticated();
  }
}
