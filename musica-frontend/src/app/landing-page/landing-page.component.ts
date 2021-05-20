import { Component, OnInit } from '@angular/core';
import { LoginFormModalComponent } from '../login-form-modal/login-form-modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  modalRef: MDBModalRef;

  openModal() {
    this.modalRef = this.modalService.show(LoginFormModalComponent)
  }
  name:any;
surname:any;
email:any;
password:any;
username:any;
private API_BASE_URL = environment.API_BASE_URL;

private REST_API_SERVER = this.API_BASE_URL+"/user";

  constructor(private modalService: MDBModalService,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
onSave(){
  console.log(this.name);
  this.httpClient.post(this.REST_API_SERVER,{name:this.name,email:this.email, password:this.password, username:this.username,surname:this.surname}
  ).subscribe((data: any)=>{
    console.log(data);
   // this.registerForm.reset();
    });
}
}
