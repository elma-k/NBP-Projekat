import { Component, OnInit, ViewChild} from '@angular/core';
import { PreviewpageService } from './previewpage.service';
import { Track } from '../model/track.model';
import { CardComponent } from '../card/card.component';
import { SecondsToMinutesPipe } from '../pipe/seconds-to-minutes';
@Component({
  selector: 'app-previewpage',
  templateUrl: './previewpage.component.html',
  styleUrls: ['./previewpage.component.css']
})
export class PreviewpageComponent implements OnInit {
  music:any;

  constructor(private previewpageService: PreviewpageService) { }

  ngOnInit(): void {
    this.msaapDisplayDelete = false;
  }
  searchSong(value:string) {
   // this.previewpageService.getMusicList(value).subscribe(music => {
   //   this.music = music;
   // });
  }

  @ViewChild('player', { static: false })
  advancedPlayer: CardComponent;


  // Multiple
  multiple: Track[] = [
    {
      id : 15,
      title: 'Lost On You',
      link:
        './assets/music/LostOnYou.mp3',
      duration: 270,
      artist: 'LP',
      albumId: 1,
      artistId: 1,
      album: 'Album 1'
    },
    {
      id : 16,
      title: 'Another Love',
      link:
        './assets/music/AnotherLove.mp3',
      duration: 247,
      artist: 'Tom Odell',
      albumId: 2,
      artistId: 2,
      album: 'Album 4'
    },
    {
        id : 17,
      title: 'No Roots',
      link:
        './assets/music/NoRoots.mp3',
      duration: 236,
      artist: 'Alice Merton',
      albumId: 3,
      artistId: 3,
      album: 'Album 5'
    }
  ];

  msaapPlaylist: Track[] = this.multiple;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [4, 6, 8];

  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;
  msaapDisplayDelete = false;

  msaapTableHeader = 'Songs';
  msaapTitleHeader = 'Title';
  msaapArtistHeader = 'Artist';
  msaapDurationHeader = 'Duration';
  msaapDisplayAction = true;
  msaapDisplayAlbum = true;


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
