import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

    goList() {
    this.navCtrl.push(Page2);
  }


}
