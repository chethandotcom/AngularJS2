var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
export var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        this.searchURL = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchURL)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function (id) {
        this.artistURL = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistURL)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbums = function (artistID) {
        this.albumsURL = 'https://api.spotify.com/v1/artists/' + artistID + '/albums';
        return this._http.get(this.albumsURL)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbum = function (id) {
        this.albumURL = 'https://api.spotify.com/v1/albums/' + id;
        return this._http.get(this.albumURL)
            .map(function (res) { return res.json(); });
    };
    SpotifyService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], SpotifyService);
    return SpotifyService;
}());
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/ngspotify/src/app/services/spotify.service.js.map