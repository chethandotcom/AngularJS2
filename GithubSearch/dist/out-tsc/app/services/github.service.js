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
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        this.clientID = '57b3116612b3b07f7a5e';
        this.clientSecret = '5a9e4072a39af806d2fcdfb4cc786fee9e4dd1e8';
        console.log('Github service ready...');
        this.userName = 'chethandotcom';
    }
    GithubService.prototype.getUser = function () {
        return this._http.get('http://api.github.com/users/' + this.userName + '?client_id=' + this.clientID + '&client_secret=' + this.clientSecret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getRepos = function () {
        return this._http.get('http://api.github.com/users/' + this.userName + '/repos?client_id=' + this.clientID + '&client_secret=' + this.clientSecret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.updateUser = function (userName) {
        this.userName = userName;
    };
    GithubService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], GithubService);
    return GithubService;
}());
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/githubsearch/src/app/services/github.service.js.map