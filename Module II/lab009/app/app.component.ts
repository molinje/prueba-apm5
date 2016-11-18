import { Component } from '@angular/core';

 export class Product {
 	id: number;
 	name: string;
 	price: number;
    total_ride: number;
    flag_selec: string;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})
export class AppComponent {

	title: string = "Ride";
	selected: Product;
    total: number;
	products: Product[] = PRODUCTS;

	onSelect(product: Product) {
        
		this.selected = product;
        product.total_ride =  30 + product.price;
        this.total = product.total_ride;

        if (product.flag_selec == "X") {

           product.flag_selec = "";            

        }
        else if (product.flag_selec != "X") {
              product.flag_selec = "X";           

        }

	}

       Calcular(product: Product, total: number){


          console.log(this.total);
          console.log("paso");   
          if (product.flag_selec == "X") {

         this.total = this.total + product.price; 
         console.log(this.total);        

        }

          
      }  
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Airport",
        price: 3900,
         total_ride:0,
         flag_selec:""
    },

        {
        id: 2,
        name: "App",
        price: 700,
              total_ride:0,
               flag_selec:""
    },

        {
        id: 3,
        name: "Units",
        price: 50,
              total_ride:0,
               flag_selec:""
    },

        {
        id: 4,
        name: "Festives",
        price: 1900,
              total_ride:0,
               flag_selec:""
    },

    
      {
        id: 5,
        name: "Default",
        price: 4100,
        total_ride:0,
         flag_selec:""
    }

];