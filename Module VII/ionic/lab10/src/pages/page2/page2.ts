import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';
import { Product } from '../../model/product';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  products: Product[];

  constructor(public navCtrl: NavController, private productService: ProductService) {}

  ionViewDidLoad() {
    console.log('Hello Lista de productos');
    this.getProducts();
  }

  getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },
            error => {
                console.log(error);
            }
        );
    }


}
