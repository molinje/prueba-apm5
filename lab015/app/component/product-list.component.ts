import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock/product-mock';

@Component({
	selector: 'product-list-app',
	templateUrl: 'app/templates/produc-list.html'
})

export class ProductListComponent {

	products: Product[] = PRODUCTS;
}