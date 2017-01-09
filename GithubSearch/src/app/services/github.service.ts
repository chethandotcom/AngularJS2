import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private userName: string;
  private clientID = '57b3116612b3b07f7a5e';
  private clientSecret = '5a9e4072a39af806d2fcdfb4cc786fee9e4dd1e8';

  constructor(private _http: Http) {
    console.log('Github service ready...');
    this.userName = 'chethandotcom';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/'+this.userName+'?client_id='+this.clientID+'&client_secret='+this.clientSecret)
        .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/'+this.userName+'/repos?client_id='+this.clientID+'&client_secret='+this.clientSecret)
        .map(res => res.json());
  }

  updateUser(userName: string) {
    this.userName = userName;
  }
}
