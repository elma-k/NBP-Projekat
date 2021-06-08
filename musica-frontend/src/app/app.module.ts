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
import { DetailsAlbumComponent } from './details-album/details-album.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { DetailsPerformerComponent } from './details-performer/details-performer.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MyplaylistsComponent } from './myplaylists/myplaylists.component';
import { DialogBox2Component } from './dialog-box2/dialog-box2.component';
import { PlaylistPreviewComponent } from './playlist-preview/playlist-preview.component';

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
    DetailsSongComponent,
    DetailsAlbumComponent,
    DetailsPerformerComponent,
    DialogBoxComponent,
    MyplaylistsComponent,
    DialogBox2Component,
    PlaylistPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'previewpage', component: PreviewpageComponent},
      {path: '', component: LandingPageComponent},
      {path: 'profile-page', component: ProfilePageComponent},
      {path: 'song', component: DetailsSongComponent},
      {path: 'album', component: DetailsAlbumComponent},
      {path: 'performer', component: DetailsPerformerComponent},
      {path: 'myplaylists', component: MyplaylistsComponent},
      {path: 'playlist/:id', component: PlaylistPreviewComponent}
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
    MatExpansionModule,
    MatDialogModule
  ],
  entryComponents: [ LoginFormModalComponent,
  ProfilePageComponent ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  exports: [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ]
})
export class AppModule { }
