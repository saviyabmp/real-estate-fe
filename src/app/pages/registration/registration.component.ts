import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from './registration.model';
import {Observable} from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { AlertService } from 'src/app/common/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  registrationForm : FormGroup;

  constructor(private formbulider: FormBuilder, private registrationService:RegistrationService,
                private alertService : AlertService) { }

  ngOnInit() {
      this.registrationForm = this.formbulider.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }/*,{validator : someFunction() }*/);
  }

  onFormSubmit() {
    const registration = this.registrationForm.value;
    this.addNewRegistration(registration);

  }

  addNewRegistration (registration: RegistrationModel) {
    this.registrationService.addNewRegistration(registration).subscribe(
        res => {
            this.alertService.alertSuccess("registrationAlert","User registration successful !");
            this.registrationForm.reset();
        },
        err => {
            this.alertService.alertError("registrationAlert","User registration failed ! Error message : " + err.error.message);
        }
        );
  }
}
