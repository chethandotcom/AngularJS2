import { Component } from '@angular/core';
import {SpotifyService} from "./services/spotify.service";

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})
export class AppComponent {
  title = 'ns works!';
}
