"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ride";
        this.products = PRODUCTS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selected = product;
        product.total_ride = 30 + product.price;
        this.total = product.total_ride;
        if (product.flag_selec == "X") {
            product.flag_selec = "";
        }
        else if (product.flag_selec != "X") {
            product.flag_selec = "X";
        }
    };
    AppComponent.prototype.Calcular = function (product, total) {
        console.log(this.total);
        console.log("paso");
        if (product.flag_selec == "X") {
            this.total = this.total + product.price;
            console.log(this.total);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PRODUCTS = [
    {
        id: 1,
        name: "Airport",
        price: 3900,
        total_ride: 0,
        flag_selec: ""
    },
    {
        id: 2,
        name: "App",
        price: 700,
        total_ride: 0,
        flag_selec: ""
    },
    {
        id: 3,
        name: "Units",
        price: 50,
        total_ride: 0,
        flag_selec: ""
    },
    {
        id: 4,
        name: "Festives",
        price: 1900,
        total_ride: 0,
        flag_selec: ""
    },
    {
        id: 5,
        name: "Default",
        price: 4100,
        total_ride: 0,
        flag_selec: ""
    }
];
//# sourceMappingURL=app.component.js.map