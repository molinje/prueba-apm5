import { Injectable } from "@angular/core";
import { Product } from "../model/product";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {

    private productsURI = 'http://138.68.0.83:7070/api/v1/product/';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productsURI + 'list')
            //cuando se usa in-memory-web-api se hace response.json().data  
            .map(response => response.json() as Product[])
            .catch(this.handleError);
    }

    update(product: Product): Observable<Product> {
        const url = `${this.productsURI}update/${product.id}`;
        return this.http
            .put(url, JSON.stringify(product), { headers: this.headers })
            .map(() => product)
            .catch(this.handleError);
    }

    create(name: string, type: string, quantity: number, price: number): Observable<Product> {

        alert('name: ' + name + 'type: ' + type + 'quantity: ' + quantity + 'price: ' + price);

        return this.http
            .post(this.productsURI + 'create',
            JSON.stringify({
                name: name,
                type: type,
                quantity: quantity,
                price: price
            }),
            { headers: this.headers })
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}