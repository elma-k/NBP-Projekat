import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
  
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
  imageSrc = this.userPhotoSrc;
  myForm = new FormGroup({
   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   file: new FormControl('', [Validators.required]),
   fileSource: new FormControl('', [Validators.required])
 });

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
    get f(){
      return this.myForm.controls;
    }
      
    onFileChange(event) {
      const reader = new FileReader();
       
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
       
        reader.onload = () => {
      
          this.imageSrc = reader.result as string;
        
          this.myForm.patchValue({
            fileSource: reader.result
          });
      
        };
      
      }
    }
      
    onSaveChanges(){
      console.log(this.myForm.value);
      this.http.post('http://localhost:4200/upload.php', this.myForm.value)
        .subscribe(res => {
          console.log(res);
          alert('Uploaded Successfully.');
        })
    }
  
  ngOnInit(): void {
  }

  
  onChangeProfilePhoto(event) {
    this.onFileChange(event);
  }
}
