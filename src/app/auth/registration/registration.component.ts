import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Register} from './registration-model';
import {Observable} from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  data = false;
  massage:string;
  registrationForm : FormGroup;

  constructor(private formbulider: FormBuilder,private authService:AuthService) { }

  ngOnInit() {
      this.registrationForm = this.formbulider.group({
      username: ['', [Validators.required]],
      LoginName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      ContactNo: ['', [Validators.required]],
      Address: ['', [Validators.required]],
    }/*,{validator : someFunction() }*/);
  }

  onFormSubmit() {
      console.log("methos formsub called");
    const user = this.registrationForm.value;
    this.createemployee(user);

  }

  createemployee(register: Register) {
    this.authService.createUser(register).subscribe(
        ()=>
        {
        this.data = true;
        this.massage = 'Data saved Successfully';
        this.registrationForm.reset();
        });
  }
}
