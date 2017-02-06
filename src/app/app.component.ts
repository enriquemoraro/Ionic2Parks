import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar} from 'ionic-native';
import { ParkData } from '../providers/park-data';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html',
  providers: [ ParkData ]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public parkData: ParkData) {
  platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    StatusBar.styleDefault();
  });

  parkData.load();
}
}
