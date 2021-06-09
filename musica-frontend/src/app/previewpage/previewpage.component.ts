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


  searchSong(val:any) {

    console.log(val.value,val.select);
    if(val.select=="artist" && val.value=="Eminem"){
      //this.multiple = [];
      this.multiple = [
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
          title: 'Square Dance',
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
      this.msaapPlaylist = this.multiple;
      }

    else if(val.select=="title" && val.value=="me"){
      this.multiple = [
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
        id : 13,
        title: 'Try Me',
        link:
          './assets/music/TryMe.mp3',
        duration: 221,
        artist: 'The Weeknd',
        albumId: 7,
        artistId: 5,
        album: 'My Dear Melancholy',
        genre: 'R&B'
      }
      ,
      {
        id : 14,
        title: 'Stay With Me',
        link:
          './assets/music/StayWithMe.mp3',
        duration: 209,
        artist: 'Sam Smith',
        albumId: 8,
        artistId: 6,
        album: 'In the Lonely Hour',
        genre: 'Soul'
      }
    ];
      this.msaapPlaylist = this.multiple;
    }
    else if(val.select=="genre" && val.value=="R&B"){
      this.multiple = [
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
      ,
      {
        id : 13,
        title: 'Try Me',
        link:
          './assets/music/TryMe.mp3',
        duration: 221,
        artist: 'The Weeknd',
        albumId: 7,
        artistId: 5,
        album: 'My Dear Melancholy',
        genre: 'R&B'
      }];
      this.msaapPlaylist = this.multiple;
    }
    
  }

  @ViewChild('player', { static: false })
  advancedPlayer: CardComponent;


  // Multiple
  multiple: Track[] = []
  // multiple: Track[] = [
  //   {
  //     id : 1,
  //     title: 'Business',
  //     link:
  //       './assets/music/Business.mp3',
  //     duration: 251,
  //     artist: 'Eminem',
  //     albumId: 1,
  //     artistId: 1,
  //     album: 'The Eminem Show',
  //     genre: 'Hip hop'
  //   },
  //   {
  //     id : 2,
  //     title: '\'Till I Collapse',
  //     link:
  //       './assets/music/TillICollapse.mp3',
  //     duration: 297,
  //     artist: 'Eminem',
  //     albumId: 1,
  //     artistId: 1,
  //     album: 'The Eminem Show',
  //     genre: 'Hip hop'
  //   },
  //   {
  //     id : 3,
  //     title: 'Without Me',
  //     link:
  //       './assets/music/WithoutMe.mp3',
  //     duration: 290,
  //     artist: 'Eminem',
  //     albumId: 1,
  //     artistId: 1,
  //     album: 'The Eminem Show',
  //     genre: 'Hip hop'
  //   },
  //   {
  //     id : 4,
  //     title: 'Soldier',
  //     link:
  //       './assets/music/Soldier.mp3',
  //     duration: 226,
  //     artist: 'Eminem',
  //     albumId: 1,
  //     artistId: 1,
  //     album: 'The Eminem Show',
  //     genre: 'Hip hop'
  //   },
  //   {
  //     id : 5,
  //     title: 'Say What YouSay',
  //     link:
  //       './assets/music/SayWhatYouSay.mp3',
  //     duration: 309,
  //     artist: 'Eminem',
  //     albumId: 1,
  //     artistId: 1,
  //     album: 'The Eminem Show',
  //     genre: 'Hip hop'
  //   },
  //   {
  //     id : 6,
  //     title: 'Square Dance',
  //     link:
  //       './assets/music/SquareDance.mp3',
  //     duration: 323,
  //     artist: 'Eminem',
  //     albumId: 1,
  //     artistId: 1,
  //     album: 'The Eminem Show',
  //     genre: 'Hip hop'
  //   },
  //   {
  //     id : 7,
  //     title: 'Lost On You',
  //     link:
  //       './assets/music/LostOnYou.mp3',
  //     duration: 270,
  //     artist: 'LP',
  //     albumId: 6,
  //     artistId: 4,
  //     album: 'Lost on You',
  //     genre: 'Pop'
  //   },
  //   {
  //     id : 8,
  //     title: 'Another Love',
  //     link:
  //       './assets/music/AnotherLove.mp3',
  //     duration: 247,
  //     artist: 'Tom Odell',
  //     albumId: 5,
  //     artistId: 3,
  //     album: 'Long Way Down',
  //     genre: 'Pop'
  //   },
  //   {
  //     id : 9,
  //     title: 'All of Me',
  //     link:
  //       './assets/music/AllofMe.mp3',
  //     duration: 307,
  //     artist: 'John Legend',
  //     albumId: 2,
  //     artistId: 2,
  //     album: 'Love in the Future',
  //     genre: 'R&B'
  //   },
  //   {
  //     id : 10,
  //     title: 'Wild',
  //     link:
  //       './assets/music/Wild.mp3',
  //     duration: 214,
  //     artist: 'John Legend',
  //     albumId: 3,
  //     artistId: 2,
  //     album: 'Bigger Love',
  //     genre: 'R&B'
  //   },
  //   {
  //     id : 11,
  //     title: 'One Life',
  //     link:
  //       './assets/music/OneLife.mp3',
  //     duration: 196,
  //     artist: 'John Legend',
  //     albumId: 3,
  //     artistId: 2,
  //     album: 'Bigger Love',
  //     genre: 'R&B'
  //   },
  //   {
  //     id : 12,
  //     title: 'I Know Better',
  //     link:
  //       './assets/music/IKnowBetter.mp3',
  //     duration: 185,
  //     artist: 'John Legend',
  //     albumId: 4,
  //     artistId: 2,
  //     album: 'Darkness and Light',
  //     genre: 'R&B'
  //   }
  //   ,
  //   {
  //     id : 13,
  //     title: 'Try Me',
  //     link:
  //       './assets/music/TryMe.mp3',
  //     duration: 221,
  //     artist: 'The Weeknd',
  //     albumId: 7,
  //     artistId: 5,
  //     album: 'My Dear Melancholy',
  //     genre: 'R&B'
  //   }
  //   ,
  //   {
  //     id : 14,
  //     title: 'Stay With Me',
  //     link:
  //       './assets/music/StayWithMe.mp3',
  //     duration: 209,
  //     artist: 'Sam Smith',
  //     albumId: 8,
  //     artistId: 6,
  //     album: 'In the Lonely Hour',
  //     genre: 'Soul'
  //   }
  //
  // ];

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
  msaapDisplayGenre = true;

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
