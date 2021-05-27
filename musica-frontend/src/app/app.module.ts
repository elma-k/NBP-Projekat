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
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';
import { DetailsSongComponent } from './details-song/details-song.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewpageComponent,
    LandingPageComponent,
    LoginFormModalComponent,
    ProfilePageComponent,
    CardComponent,
    SearchBarComponent,
    SecondsToMinutesPipe,
    DetailsSongComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'previewpage', component: PreviewpageComponent},
      {path: '', component: LandingPageComponent},
      {path: 'profile-page', component: ProfilePageComponent},
      {path: 'song', component: DetailsSongComponent}
    ]),
    ModalModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
  entryComponents: [ LoginFormModalComponent,
  ProfilePageComponent ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
