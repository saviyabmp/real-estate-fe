import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchboxComponent } from './common/searchbox/searchbox.component';
import { GreetingComponent } from './testing/greeting/greeting.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { LandBuyerComponent } from './pages/land/land-buyer/land-buyer.component';
import { LandSellerComponent } from './pages/land/land-seller/land-seller.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthService } from './auth/auth.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AlertComponent } from './common/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchboxComponent,
    GreetingComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    InboxComponent,
    LandBuyerComponent,
    LandSellerComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
      AuthService,
      { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService,
      {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
