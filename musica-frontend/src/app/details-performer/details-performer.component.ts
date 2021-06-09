import { Component, OnInit, ChangeDetectorRef, OnDestroy,ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Track } from '../model/track.model';
import { CardComponent } from '../card/card.component';
import { SecondsToMinutesPipe } from '../pipe/seconds-to-minutes';


@Component({
  selector: 'app-details-performer',
  templateUrl: './details-performer.component.html',
  styleUrls: ['./details-performer.component.css']
})
export class DetailsPerformerComponent implements OnInit {
  music:any;
  albumPhotoSrc="./assets/images/john-legend.jpg";
  albumTitle= "The Eminem Show";
  performer= "John Legend";
  year = 2002;
  noSongs = 6;
  fullLength ="27 min, 6 sec";

  constructor() { }

  ngOnInit(): void {
    this.msaapDisplayDelete = false;
  }
  searchSong(value:string) {
   // this.detailsAlbumService.getMusicList(value).subscribe(music => {
   //   this.music = music;
   // });
  }
  //constructor() { }

  @ViewChild('player', { static: false })
  advancedPlayer: CardComponent;


  // Multiple
  eminem: Track[] = [
    {
        id : 9,
        title: 'All of Me',
        link:
          './assets/music/AllofMe.mp3',
        duration: 307,
        artist: 'John Legend',
        albumId: 2,
        artistId: 2,
        album: 'Love in the Future',
        genre: 'R&B'
      },
      {
        id : 10,
        title: 'Wild',
        link:
          './assets/music/Wild.mp3',
        duration: 214,
        artist: 'John Legend',
        albumId: 3,
        artistId: 2,
        album: 'Bigger Love',
        genre: 'R&B'
      },
      {
        id : 11,
        title: 'One Life',
        link:
          './assets/music/OneLife.mp3',
        duration: 196,
        artist: 'John Legend',
        albumId: 3,
        artistId: 2,
        album: 'Bigger Love',
        genre: 'R&B'
      },
      {
        id : 12,
        title: 'I Know Better',
        link:
          './assets/music/IKnowBetter.mp3',
        duration: 185,
        artist: 'John Legend',
        albumId: 4,
        artistId: 2,
        album: 'Darkness and Light',
        genre: 'R&B'
      }

  ];

  msaapPlaylist: Track[] = this.eminem;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [4, 6, 8];

  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;
  msaapDisplayDelete = false;
  msaapDisplayAction = true;
  msaapDisplayAlbum = false;
  msaapDisplayGenre = false;

  msaapTableHeader = 'Songs';
  msaapTitleHeader = 'Title';
  msaapArtistHeader = 'Artist';
  msaapDurationHeader = 'Duration';



  // Start: Required for demo purpose


  currentTrack: Track = new Track();
  currentTime: any;

  appendTracksToPlaylistDisable = false;
  counter = 1;

  onEnded(event:any) {
    console.log(event);
    // your logic which needs to
    // be triggered once the
    // track ends goes here.

    // example
    this.currentTrack = new Track();
  }

  logCurrentTrack() {
    this.advancedPlayer.audioPlayerService.getCurrentTrack().subscribe(track => {
      this.currentTrack = track;
    });
  }

  logCurrentTime() {
    this.advancedPlayer.audioPlayerService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
    });
  }

  consoleLogCurrentData() {
    console.log(this.currentTrack.title + ' : ' + this.currentTime);
  }



}
