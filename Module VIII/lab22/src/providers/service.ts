import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite } from 'ionic-native';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  db: SQLite;
  constructor() {
  	this.db = new SQLite();
  }

  openDatabase(){
    return this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    });
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS user(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'type TEXT, ' +
        'name TEXT, ' +
        'phone TEXT, ' +
        'email TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let query = 'SELECT * FROM user;';
    return this.db.executeSql(query, [])
      .then(response => {
        let users = [];
        for (let index = 0; index < response.rows.length; index++) {
          users.push(response.rows.item(index));
        }
        return Promise.resolve(users);
      })
  }

  create(user: any){
    let query = 'INSERT INTO user(name, phone, email ) VALUES(?,?,?)';
    return this.db.executeSql(query, [user.name, user.phone, user.email]);
  }

  update_name(user: any){
    let query = 'UPDATE user SET name=? WHERE id=?';
    return this.db.executeSql(query, [user.name, user.id]);
  }

    update_phone(user: any){
    let query = 'UPDATE user SET phone=? WHERE id=?';
    return this.db.executeSql(query, [user.phone, user.id]);
  }

    update_email(user: any){
    let query = 'UPDATE user SET email=? WHERE id=?';
    return this.db.executeSql(query, [user.email, user.id]);
  }

}
