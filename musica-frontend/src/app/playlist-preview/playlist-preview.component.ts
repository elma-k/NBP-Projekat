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


  multiple: Track[] = [

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
  msaapDisplayGenre = true;

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
