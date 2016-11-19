import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagelistPage } from '../pagelist/pagelist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

    goList() {
    this.navCtrl.push(PagelistPage);
  }

}
