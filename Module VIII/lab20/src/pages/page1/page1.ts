import { Component } from '@angular/core';
import {Geolocation} from 'ionic-native';

import { Storage } from '@ionic/storage';
import { NavController, AlertController } from 'ionic-angular';
import { CoordinateService } from '../../providers/service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

 private setDataCoords: any = {latitude: '', longitude: ''};
  	data: any = {latitude: '', longitude: ''};

  constructor(public navCtrl: NavController, public service: CoordinateService,
              public alertCtrl: AlertController, public storage: Storage) {}


    ngOnInit() {
    Geolocation.getCurrentPosition().then(resp => {
      this.setDataCoords.latitude = resp.coords.latitude;
      this.setDataCoords.longitude = resp.coords.longitude;

      this.storage.set("coords", this.setDataCoords);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  
   getInfo() {
    this.storage.get("coords").then(res => {
    	console.log(res); 
    	this.data.latitude = res['latitude']; 
    	this.data.longitude = res['longitude']

    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      message: this.data.latitude,
      buttons: ['Ok']
    });
    alert.present()
    }



    );
  }




}
