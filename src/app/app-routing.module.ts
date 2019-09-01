import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchboxComponent } from './common/searchbox/searchbox.component';
import { GreetingComponent } from './testing/greeting/greeting.component';
import { InboxComponent } from './pages/inbox/inbox.component';


const routes: Routes = [
   {path:  "", pathMatch:  "full",redirectTo:  "home"},
   { path: 'greeting', component: GreetingComponent },
   { path: 'home', component: HomeComponent },
   { path: 'search', component: SearchboxComponent },
   { path: 'inbox', component: InboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
