//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  name: string;
  id: number;
}
interface Playlist {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;
  selectedValue: string;

  playlist: Playlist[] = [
    {value: 0, viewValue: 'playlist1'},
    {value: 1, viewValue: 'playlist2'},
    {value: 2, viewValue: 'playlist3'}
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data,selected:this.selectedValue});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
