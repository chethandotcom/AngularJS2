import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const fireBaseConfig = {
    apiKey: 'AIzaSyBpImFstNJtWMElgmFuRA9qpB1xs8xScnw',
    authDomain: 'buisinesscontacts-a1acc.firebaseapp.com',
    databaseURL: 'https://buisinesscontacts-a1acc.firebaseio.com',
    storageBucket: 'buisinesscontacts-a1acc.appspot.com'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(fireBaseConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
