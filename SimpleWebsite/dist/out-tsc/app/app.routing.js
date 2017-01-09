import { RouterModule } from '@angular/router';
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/a2website/src/app/app.routing.js.map