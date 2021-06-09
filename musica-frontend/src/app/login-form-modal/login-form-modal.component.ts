import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-form-modal',
  templateUrl: './login-form-modal.component.html',
  styleUrls: ['./login-form-modal.component.css']
})
export class LoginFormModalComponent  {
  validatingForm: FormGroup;
email:string;
password:string;
private API_BASE_URL = environment.API_BASE_URL;

private REST_API_SERVER = this.API_BASE_URL+"/auth/login";
  constructor(public modalRef: MDBModalRef,private httpClient: HttpClient,private router: Router) {
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }
  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  onSave(){
    console.log(this.email);
    console.log(this.password);
    this.httpClient.post(this.REST_API_SERVER,{email:this.email, password:this.password}
    ).subscribe((data: any)=>{
      console.log(data);
      this.router.navigate(['/previewpage']);
     // this.registerForm.reset();
      });
  }
  }
