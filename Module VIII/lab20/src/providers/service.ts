import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class CoordinateService {

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
    let sql = 'CREATE TABLE IF NOT EXISTS coordinate(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'type TEXT, ' +
        'latitude TEXT, ' +
        'longitude TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let query = 'SELECT * FROM coordinate;';
    return this.db.executeSql(query, [])
      .then(response => {
        let coordinates = [];
        for (let index = 0; index < response.rows.length; index++) {
          coordinates.push(response.rows.item(index));
        }
        return Promise.resolve(coordinates);
      })
  }

  create(coordinate: any){
    let query = 'INSERT INTO coordinate(name) VALUES(?)';
    return this.db.executeSql(query, [coordinate.name]);
  }

  update(coordinate: any){
    let query = 'UPDATE coordinate SET latitude=? WHERE id=?';
    return this.db.executeSql(query, [coordinate.latitude, coordinate.id]);
  }

}

