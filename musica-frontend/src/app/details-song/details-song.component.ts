import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-song',
  templateUrl: './details-song.component.html',
  styleUrls: ['./details-song.component.css']
})
export class DetailsSongComponent implements OnInit {

  constructor() { }

  songTitle = "Prvi maj";
  songPerformer = "Dubioza Kolektiv";

  ngOnInit(): void {
  }

}
