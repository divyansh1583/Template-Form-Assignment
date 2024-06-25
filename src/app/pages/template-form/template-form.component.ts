import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  constructor() { }

  patient = {
    name: '',
    email: '',
    gender: '',
    phoneNo: '',

  };

  onSubmit(){
    console.log(this.patient);
    const patientInfo = `Name: ${this.patient.name}\nEmail: ${this.patient.email}\nGender: ${this.patient.gender}\nPhone Number: ${this.patient.phoneNo}`;
    alert(patientInfo);
  }
}
