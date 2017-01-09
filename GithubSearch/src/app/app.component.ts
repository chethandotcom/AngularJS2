import { Component } from '@angular/core';
import {GithubService} from "./services/github.service";

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GithubService ]
})
export class AppComponent {
  title = 'gs works!';
}
