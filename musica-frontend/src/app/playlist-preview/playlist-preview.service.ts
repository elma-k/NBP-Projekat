import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MusicList, Song } from './music-list';
import { of } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaylistPreviewService {

  iTunesUrl = 'https://itunes.apple.com/search';
  musicList: Observable<MusicList[]>;

  constructor(private httpClient: HttpClient) { }


  getMusicList(queryString:string): Observable<MusicList[]> {

      if (!this.musicList) {
        this.musicList = this.httpClient.get<MusicList[]>(`${this.iTunesUrl}?term=${queryString}`).pipe(
          publishReplay(1),
          refCount()
        );
      }
      return this.musicList;

  }

  clearCache() {
    this.musicList = of([]);
  }
}
