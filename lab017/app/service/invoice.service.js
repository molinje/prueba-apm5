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
var invoice_mock_1 = require("../mock/invoice-mock");
var invoice_1 = require("../model/invoice");
var InvoiceService = (function () {
    function InvoiceService() {
    }
    InvoiceService.prototype.getInvoices = function () {
        return Promise.resolve(invoice_mock_1.INVOICES);
    };
    InvoiceService.prototype.getInvoice = function (id) {
        return this.getInvoices()
            .then(function (invoices) { return invoices.find(function (invoice) { return invoice.id_inv === id; }); });
    };
    InvoiceService.prototype.getInvoice_from_cust = function (id) {
        for (var _i = 0; _i < invoice_mock_1.INVOICES.length; _i++) {
            var inv = void 0;
            inv = invoice_mock_1.INVOICES[_i];
            if (inv.id_cus == id) {
                invoice_1.Invoice.push;
            }
            console.log(num);
        }
        invoice_r: invoice_1.Invoice[] = this.getInvoices();
        return this.getInvoices()
            .then(function (invoices) { return invoices.find(function (invoice) { return invoice.id_cus === id; }); });
    };
    InvoiceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InvoiceService);
    return InvoiceService;
}());
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map