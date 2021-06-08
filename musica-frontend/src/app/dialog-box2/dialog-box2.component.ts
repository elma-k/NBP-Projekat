//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Playlist } from '../model/playlist.model';


@Component({
  selector: 'app-dialog-box2',
  templateUrl: './dialog-box2.component.html',
  styleUrls: ['./dialog-box2.component.css']
})
export class DialogBox2Component {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBox2Component>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Playlist) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
