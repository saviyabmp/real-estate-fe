import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'real-estate-fe';

  showHeaderComponenet: boolean = false;

  ngOnInit() {
  }

  constructor(private router: Router) {
    // on route change to '/login' and /registration, don't show header on page.
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
      }
    });
  }
}
