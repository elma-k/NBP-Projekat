import { Component, OnInit } from '@angular/core';
import { LoginFormModalComponent } from '../login-form-modal/login-form-modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(LoginFormModalComponent)
  }
}