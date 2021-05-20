import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviewpageComponent } from './previewpage/previewpage.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginFormModalComponent } from './login-form-modal/login-form-modal.component';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    PreviewpageComponent,
    LandingPageComponent,
    LoginFormModalComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'previewpage', component: PreviewpageComponent},
      {path: 'landing-page', component: LandingPageComponent},
      {path: 'profile-page', component: ProfilePageComponent}
    ]),
    ModalModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  entryComponents: [ LoginFormModalComponent,
  ProfilePageComponent ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
