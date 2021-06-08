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
  }
  searchSong(value:string) {
   // this.previewpageService.getMusicList(value).subscribe(music => {
   //   this.music = music;
   // });
  }

  //constructor() { }
  private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';

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
      albumId: 1
    },
    {
      id : 16,
      title: 'Another Love',
      link:
        './assets/music/AnotherLove.mp3',
      duration: 247,
      artist: 'Tom Odell',
      albumId: 2
    },
    {
        id : 17,
      title: 'No Roots',
      link:
        './assets/music/NoRoots.mp3',
      duration: 236,
      artist: 'Alice Merton',
      albumId: 3
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
    // logCurrentTrack();
    // logCurrentTime();
    // Make sure to subscribe (by calling above methods)
    // before getting the data
    console.log(this.currentTrack.title + ' : ' + this.currentTime);
  }

  appendTracksToPlaylist() {

    // if (this.msaapPlaylist.length === 1) {
    //   this.msaapPlaylist = this.multiple;
    // } else if (this.msaapPlaylist.length === 2) {
    //   this.msaapPlaylist2.map(track => {
    //     this.msaapPlaylist.push(track);
    //   });
    //   this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
    // } else if (this.msaapPlaylist.length === 4) {
    //   this.msaapPlaylist3.map(track => {
    //     this.msaapPlaylist.push(track);
    //   });
    //   this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
    //   this.appendTracksToPlaylistDisable = true;
    // }
  }

  // setSingleTrack() {
  //   this.msaapPlaylist = this.singleTrack;
  //   this.appendTracksToPlaylistDisable = false;
  // }

  changeMsaapDisplayTitle(event:any) {
    this.msaapDisplayTitle = event.checked;
  }

  changeMsaapDisplayPlayList(event:any) {
    this.msaapDisplayPlayList = event.checked;
  }

  changeMsaapDisplayVolumeControls(event:any) {
    this.msaapDisplayVolumeControls = event.checked;
  }

  changeMsaapDisplayRepeatControls(event:any) {
    this.msaapDisplayRepeatControls = event.checked;
  }

  changeMsaapDisplayArtist(event:any) {
    this.msaapDisplayArtist = event.checked;
  }

  changeMsaapDisplayDuration(event:any) {
    this.msaapDisplayDuration = event.checked;
  }

  changeMsaapDisablePositionSlider(event:any) {
    this.msaapDisablePositionSlider = event.checked;
  }
  // End: Required for demo purpose


}
