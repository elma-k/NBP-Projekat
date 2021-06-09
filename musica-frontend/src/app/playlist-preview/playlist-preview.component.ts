import { Component, OnInit, ViewChild} from '@angular/core';
import { PlaylistPreviewService } from './playlist-preview.service';
import { Track } from '../model/track.model';
import { CardComponent } from '../card/card.component';
import { SecondsToMinutesPipe } from '../pipe/seconds-to-minutes';
@Component({
  selector: 'app-playlist-preview',
  templateUrl: './playlist-preview.component.html',
  styleUrls: ['./playlist-preview.component.css']
})
export class PlaylistPreviewComponent implements OnInit {
  music:any;

  constructor(private playlistPreviewService: PlaylistPreviewService) { }

  ngOnInit(): void {
    this.msaapDisplayDelete = true;
  }
  searchSong(value:string) {
   // this.playlistPreviewService.getMusicList(value).subscribe(music => {
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
      artistId: 1
    },
    {
      id : 16,
      title: 'Another Love',
      link:
        './assets/music/AnotherLove.mp3',
      duration: 247,
      artist: 'Tom Odell',
      albumId: 2,
      artistId: 2
    },
    {
        id : 17,
      title: 'No Roots',
      link:
        './assets/music/NoRoots.mp3',
      duration: 236,
      artist: 'Alice Merton',
      albumId: 3,
      artistId: 3
    }
  ];

  msaapPlaylist: Track[] = this.multiple;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [4, 6, 8];

  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDelete = true;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;
  msaapDisplayAction = true;
  msaapDisplayAlbum = true;

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
