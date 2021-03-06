import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);