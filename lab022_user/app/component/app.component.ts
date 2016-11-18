import { Component } from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})
export class AppComponent {
	title: string = "Lista de usuarios";

    selected: User;

    users: User[];

    constructor(private userService: UserService) {

    }

    getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => {
                this.users = users;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getUsers();
    }

    onSelect(user: User){
        this.selected = user;
    }

  /*  add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.userService.create(name)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            }
            );
    }*/
}