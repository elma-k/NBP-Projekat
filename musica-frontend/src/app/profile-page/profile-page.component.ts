import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})


export class ProfilePageComponent implements OnInit {
  selectedValue: string;
  name="Marija";
  surname="Maric";
  email="marija@etf.unsa.ba";
  username="Marija123";
  userPhotoSrc="./assets/images/profile-medium.png";

  locations: Location[] = [
    {value: 'ba-0', viewValue: 'Bosnia & Herzegovina'},
    {value: 'cr-1', viewValue: 'Croatia'},
    {value: 'ru-2', viewValue: 'Russia'}
  ];
  selectedLocation = this.locations[0].value;

  emailFormControl = new FormControl(this.email, [
    Validators.required,
    Validators.email,
  ]);

  fileName = '';

    constructor(private http: HttpClient) {}
  
  
  ngOnInit(): void {
  }

  onSaveChanges() {}
  
  onChangeProfilePhoto() {
  }
}
