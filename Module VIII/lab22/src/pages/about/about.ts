import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/service';
import { User } from '../../model/user';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	//users: User[];
    users: any[] = [];

  constructor(public navCtrl: NavController, private userService: UserService) {

  }

   ionViewDidLoad(){
    this.getAllUsers();
  }

   getAllUsers(){
    this.userService.getAll()
      .then(users => {
        console.log(users);
        this.users = users;
      })
  }

}
