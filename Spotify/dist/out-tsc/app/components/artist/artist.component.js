var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { ActivatedRoute } from "@angular/router";
export var ArtistComponent = (function () {
    function ArtistComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._spotifyService.getArtist(id)
                .subscribe(function (artist) {
                _this.artist = artist;
            });
            _this._spotifyService.getAlbums(id)
                .subscribe(function (albums) {
                _this.albums = albums.items;
            });
        });
    };
    ArtistComponent = __decorate([
        Component({
            selector: 'ns-artist',
            templateUrl: './artist.component.html',
            styleUrls: ['./artist.component.css']
        }), 
        __metadata('design:paramtypes', [SpotifyService, ActivatedRoute])
    ], ArtistComponent);
    return ArtistComponent;
}());
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/ngspotify/src/app/components/artist/artist.component.js.map