import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NotesService} from "../services/notes.service";
import {DetailPage} from "../pages/detail/detail";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyB_peaqn0l95h4ng2hnUGpeoNE1LeEV5tYx",
  authDomain: "notionic-11220.firebaseapp.com",
  databaseURL: "https://notionic-11220.firebaseio.com",
  storageBucket: "notionic-11220.appspot.com",
  messagingSenderId: '245576068142'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      NotesService
  ]
})
export class AppModule {}
