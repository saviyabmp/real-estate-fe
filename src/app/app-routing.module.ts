import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { GreetingComponent } from './greeting/greeting.component';


const routes: Routes = [
   { path: 'greeting', component: GreetingComponent },
   { path: 'home', component: HomeComponent },
   { path: 'search', component: SearchboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
