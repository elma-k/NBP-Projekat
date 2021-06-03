import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
export interface PeriodicElement {
  title: string;
  position: number;
  duration: number;
  liked: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, title: 'Song1', duration: 1.0079, liked: false },
  {position: 2, title: 'Song2', duration: 4.0026, liked: true},
  {position: 3, title: 'Song3', duration: 6.941, liked: false},
  {position: 4, title: 'Song4', duration: 9.0122, liked: true},
];


@Component({
  selector: 'app-details-album',
  templateUrl: './details-album.component.html',
  styleUrls: ['./details-album.component.css']
})
export class DetailsAlbumComponent implements OnInit {

  albumPhotoSrc="./assets/images/dubioza-kolektiv.jpg";
  albumTitle= "Happy Machine";
  performer= "Dubioza Kolektiv";
  year = 2016;
  noSongs =10;
  fullLength ="35 min, 6 sec";
  
  constructor() {
  }
  displayedColumns: string[] = ['position', 'title',  'liked', 'duration'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }
  
}
