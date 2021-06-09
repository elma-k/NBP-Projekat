import { Component, OnInit, ChangeDetectorRef, OnDestroy,ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { DetailsAlbumService } from './details-album.service';
import { Track } from '../model/track.model';
import { CardComponent } from '../card/card.component';
import { SecondsToMinutesPipe } from '../pipe/seconds-to-minutes';


@Component({
  selector: 'app-details-album',
  templateUrl: './details-album.component.html',
  styleUrls: ['./details-album.component.css']
})
export class DetailsAlbumComponent implements OnInit {
  music:any;
  albumPhotoSrc="./assets/images/the_eminem_show.jpg";
  albumTitle= "The Eminem Show";
  performer= "Eminem";
  year = 2002;
  noSongs = 6;
  fullLength ="27 min, 6 sec";

  constructor(private detailsAlbumService: DetailsAlbumService) { }

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
      id : 1,
      title: 'Business',
      link:
        './assets/music/Business.mp3',
      duration: 251,
      artist: 'Eminem',
      albumId: 1,
      artistId: 1,
      album: 'The Eminem Show',
      genre: 'Hip hop'
    },
    {
      id : 2,
      title: '\'Till I Collapse',
      link:
        './assets/music/TillICollapse.mp3',
      duration: 297,
      artist: 'Eminem',
      albumId: 1,
      artistId: 1,
      album: 'The Eminem Show',
      genre: 'Hip hop'
    },
    {
      id : 3,
      title: 'Without Me',
      link:
        './assets/music/WithoutMe.mp3',
      duration: 290,
      artist: 'Eminem',
      albumId: 1,
      artistId: 1,
      album: 'The Eminem Show',
      genre: 'Hip hop'
    },
    {
      id : 4,
      title: 'Soldier',
      link:
        './assets/music/Soldier.mp3',
      duration: 226,
      artist: 'Eminem',
      albumId: 1,
      artistId: 1,
      album: 'The Eminem Show',
      genre: 'Hip hop'
    },
    {
      id : 5,
      title: 'Say What YouSay',
      link:
        './assets/music/SayWhatYouSay.mp3',
      duration: 309,
      artist: 'Eminem',
      albumId: 1,
      artistId: 1,
      album: 'The Eminem Show',
      genre: 'Hip hop'
    },
    {
      id : 6,
      title: 'SquareDance',
      link:
        './assets/music/SquareDance.mp3',
      duration: 323,
      artist: 'Eminem',
      albumId: 1,
      artistId: 1,
      album: 'The Eminem Show',
      genre: 'Hip hop'
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
