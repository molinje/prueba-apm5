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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersURI = 'http://138.68.0.83:7070/api/v1/user';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.getUsers = function () {
        var url = ("" + this.usersURI) + "/list";
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /* update(product: Product): Observable<Product> {
         const url = `${this.productsURI}/${product.id}`;
         return this.http
             .put(url, JSON.stringify(product), {headers: this.headers})
             .map(() => product)
             .catch(this.handleError);
     }
 
     create(name: string): Observable<Product> {
 
         return this.http
             .post(this.productsURI, JSON.stringify({name: name}), {headers: this.headers})
             .map(res => res.json().data)
             .catch(this.handleError);
     }*/
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Rx_1.Observable.throw(error.message || error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map