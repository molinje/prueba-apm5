import {Injectable} from "@angular/core";
import {INVOICES} from "../mock/invoice-mock";
import {Invoice} from "../model/invoice";

@Injectable()
export class InvoiceService{

	invoices: Invoice[];
	inv: Invoice;

    getInvoices(): Promise<Invoice[]>{
        return Promise.resolve(INVOICES);
    }

    getInvoice(id: number): Promise<Invoice> {
        return this.getInvoices()
            .then(invoices => invoices.find(invoice => invoice.id_inv === id));
    }

    getInvoice_from_cust(id: number): Promise<Invoice[]> {

    
for (var _i = 0; _i < INVOICES.length; _i++) {
	 let inv: Invoice;
    inv = INVOICES[_i];

    if(inv.id_cus == id) {
    	Invoice.push
    }
    console.log(num);
}


    	invoice_r: Invoice[] = this.getInvoices();

        return this.getInvoices()
            .then(invoices => invoices.find(invoice => invoice.id_cus === id));
    }
}