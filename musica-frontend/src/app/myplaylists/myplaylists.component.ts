//app.component.ts
import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBox2Component } from '../dialog-box2/dialog-box2.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Playlist } from '../model/playlist.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


const ELEMENT_DATA: Playlist[] = [
  {id: 1560608769632, name: 'Playlist 1'},
  {id: 1560608796014, name: 'Playlist 2'},
  {id: 1560608787815, name: 'Playlist 3'},
  {id: 1560608805101, name: 'Playlist 4'}
];
@Component({
  selector: 'app-myplaylists',
  templateUrl: './myplaylists.component.html',
  styleUrls: ['./myplaylists.component.css']
})
export class MyplaylistsComponent implements AfterViewInit{
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Playlist>(ELEMENT_DATA);
  data = Object.assign( ELEMENT_DATA);
  selected : number;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(public dialog: MatDialog,private router: Router) {}

  openDialog(action:any,obj:any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBox2Component, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        //this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  selectedIndex(obj:any) {
    const index = this.dataSource.data.indexOf(obj);
    if(index!=-1){
      this.selected = index;
    }
  }

  addRowData(row_obj:any){
    var d = new Date();
    const data = this.dataSource.data;
    data.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.dataSource.data = data;
    this.table.renderRows();
  }
  showPlaylist(obj:any){
     this.router.navigate(['/playlist', obj]);

  }
  // updateRowData(row_obj:any){
  //   this.dataSource = this.dataSource.filter((value:any,key:any)=>{
  //     if(value.id == row_obj.id){
  //       value.name = row_obj.name;
  //     }
  //     return true;
  //   });
  //   const data = this.dataSource.data;
  //   data.push({
  //     id:d.getTime(),
  //     name:row_obj.name
  //   });
  //   this.dataSource.data = data;
  //   this.table.renderRows();
  // }
  deleteRowData(row_obj:any){
    const index = this.dataSource.data.indexOf(row_obj);
    this.dataSource.data.splice(this.selected, 1);
    this.dataSource._updateChangeSubscription();
    this.dataSource.paginator = this.paginator;



  }
}
