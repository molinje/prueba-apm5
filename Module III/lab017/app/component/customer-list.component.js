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
var customer_service_1 = require("../service/customer.service");
var router_1 = require("@angular/router");
var CustomerListComponent = (function () {
    function CustomerListComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.title = "Clientes";
    }
    CustomerListComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers().then(function (customers) { return _this.customers = customers; });
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomerListComponent.prototype.onSelect = function (customer) {
        this.selected = customer;
    };
    CustomerListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['customer/detail/', this.selected.id_cus]);
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: 'customer-list-app',
            templateUrl: 'app/templates/customer-list.html',
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, customer_service_1.CustomerService])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customer-list.component.js.map