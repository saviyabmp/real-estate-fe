import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchboxComponent,
    GreetingComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
