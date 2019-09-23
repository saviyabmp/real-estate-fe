import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchboxComponent } from './common/searchbox/searchbox.component';
import { GreetingComponent } from './testing/greeting/greeting.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { LandBuyerComponent } from './pages/land/land-buyer/land-buyer.component';
import { LandSellerComponent } from './pages/land/land-seller/land-seller.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
   //{path:  "", pathMatch:  "full",redirectTo:  "login",canActivate: [AuthGuard]},
   { path: '', component: HomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
   { path: 'greeting', component: GreetingComponent ,canActivate: [AuthGuard]},
   { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
   { path: 'search', component: SearchboxComponent ,canActivate: [AuthGuard]},
   { path: 'inbox', component: InboxComponent ,canActivate: [AuthGuard]},
   { path: 'buy-land', component: LandBuyerComponent ,canActivate: [AuthGuard]},
   { path: 'sell-land', component: LandSellerComponent ,canActivate: [AuthGuard]},
   { path: 'login', component: LoginComponent, data: { title: 'Login Page'}},
   { path: 'registration', component: RegistrationComponent, data: {title: 'Registration Page'}},
   {path: '404', component: NotFoundComponent},
   {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
