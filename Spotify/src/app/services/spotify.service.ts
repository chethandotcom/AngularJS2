import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchURL: string;
  private artistURL: string;
  private albumsURL: string;
  private albumURL: string;

  constructor(private _http: Http) { }

  searchMusic(str: string, type='artist') {
    this.searchURL = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchURL)
        .map(res => res.json());
  }

  getArtist(id: string) {
    this.artistURL = 'https://api.spotify.com/v1/artists/'+id;
    return this._http.get(this.artistURL)
        .map(res => res.json());
  }

  getAlbums(artistID: string) {
    this.albumsURL = 'https://api.spotify.com/v1/artists/'+artistID+'/albums';
    return this._http.get(this.albumsURL)
        .map(res => res.json());
  }

  getAlbum(id: string) {
    this.albumURL = 'https://api.spotify.com/v1/albums/'+id;
    return this._http.get(this.albumURL)
        .map(res => res.json());
  }
}
