import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from './registration.model';
import {Observable} from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  data = false;
  massage:string;
  registrationForm : FormGroup;

  constructor(private formbulider: FormBuilder, private registrationService:RegistrationService) { }

  ngOnInit() {
      this.registrationForm = this.formbulider.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }/*,{validator : someFunction() }*/);
  }

  onFormSubmit() {
    console.log("methos formsub called");
    const registration = this.registrationForm.value;
    this.addNewRegistration(registration);

  }

  addNewRegistration (registration: RegistrationModel) {
    this.registrationService.addNewRegistration(registration).subscribe(
        ()=>
        {
        this.data = true;
        this.massage = 'Data saved Successfully';
        this.registrationForm.reset();
        });
  }
}
