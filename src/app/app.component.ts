import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './_services/authentication.service';
import { localData } from './shared/localData/localData';

//import * as firebase from 'firebase';
// import {Authentication}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService
  ) {
    //firebase.initializeApp({
    //  apiKey: "AIzaSyBSUVe9zrEDzyiHI_vvjvFkBLxq-bcjDEo",
    //  authDomain: "chitchat-eedca.firebaseapp.com",
    //  databaseURL: "https://chitchat-eedca.firebaseio.com",
    //  projectId: "chitchat-eedca",
    //  storageBucket: "chitchat-eedca.appspot.com",
    //  messagingSenderId: "378554547896",
    //  appId: "1:378554547896:web:9790d90117e074b4e13e4d",
    //  measurementId: "G-0PHZ1PZ0W6"
    //});
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(localStorage.getItem(localData.CURRENT_USER.ID)!=null){
        this.authService.setUserId(localStorage.getItem(localData.CURRENT_USER.ID));
      }
      if(localStorage.getItem(localData.RECEIVER_USER.ID)!=null){
        this.authService.setReceiverId(localStorage.getItem(localData.RECEIVER_USER.ID));
      }
      if(localStorage.getItem(localData.RECEIVER_USER.NAME)!=null){
        this.authService.setReceiverName(localStorage.getItem(localData.RECEIVER_USER.NAME));
      }
    });
  }
}
