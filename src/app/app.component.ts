import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'real-estate-fe';

  showHeaderComponenet: boolean = false;

  ngOnInit() {
  }

  constructor(private router: Router, private location: Location) {

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
          const url = event['url'];
          const login = new RegExp("^/login*");
          const adduser = new RegExp("^/registration*");
        if ( login.test(url) || adduser.test(url)) {
          this.showHeaderComponenet = false;
        } else {
          this.showHeaderComponenet = true;
        }
    }})
  }
}
