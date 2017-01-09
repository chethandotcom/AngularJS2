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
export var AlbumComponent = (function () {
    function AlbumComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._spotifyService.getAlbum(id)
                .subscribe(function (album) {
                _this.album = album;
                console.log(album.tracks.items);
            });
        });
    };
    AlbumComponent = __decorate([
        Component({
            selector: 'ns-album',
            templateUrl: './album.component.html',
            styleUrls: ['./album.component.css']
        }), 
        __metadata('design:paramtypes', [SpotifyService, ActivatedRoute])
    ], AlbumComponent);
    return AlbumComponent;
}());
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/ngspotify/src/app/components/album/album.component.js.map