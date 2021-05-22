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

  // Single
  singleTrack: Track[] = [
    {
      title: 'In Love',
      link:
        'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
      duration: 227,
      artist: 'A Himitsu feat. Nori'
    }
  ];

  // Multiple
  multiple: Track[] = [
    {
      title: 'Lost On You',
      link:
        './assets/music/LostOnYou.mp3',
      duration: 270,
      artist: 'LP'
    },
    {
      title: 'Another Love',
      link:
        './assets/music/AnotherLove.mp3',
      duration: 247,
      artist: 'Tom Odell'
    },
    {
      title: 'No Roots',
      link:
        './assets/music/NoRoots.mp3',
      duration: 236,
      artist: 'Alice Merton'
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

  msaapPlaylist2: Track[] = [
    {
      title: '1400',
      link: `${this.fmaBaseUrl}/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3`,
      duration: 212,
      artist: 'Yung Kartz'
    },
    {
      title: 'Epic Song',
      link: `${this.fmaBaseUrl}/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3`,
      duration: 54,
      artist: 'BoxCat Games'
    }
  ];

  msaapPlaylist3: Track[] = [
    {
      title: 'Hachiko (The Faithful Dog)',
      link: `${this.fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`,
      duration: 185,
      artist: 'The Kyoto'
    },
    {
      title: 'Starling',
      link: `${this.fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`,
      duration: 105,
      artist: 'Podington Bear'
    }
  ];

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

    if (this.msaapPlaylist.length === 1) {
      this.msaapPlaylist = this.multiple;
    } else if (this.msaapPlaylist.length === 2) {
      this.msaapPlaylist2.map(track => {
        this.msaapPlaylist.push(track);
      });
      this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
    } else if (this.msaapPlaylist.length === 4) {
      this.msaapPlaylist3.map(track => {
        this.msaapPlaylist.push(track);
      });
      this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
      this.appendTracksToPlaylistDisable = true;
    }
  }

  setSingleTrack() {
    this.msaapPlaylist = this.singleTrack;
    this.appendTracksToPlaylistDisable = false;
  }

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
