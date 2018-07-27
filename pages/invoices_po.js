'use stric';

class Invoices {
    constructor(){
        this.newInvoice = $('#dataview-insert-button');
        this.alertInfo = $('#content div[class*=alert-info]');
        this.searchField = $('#dataview-search-input');
        this.searchButton = $('#dataview-search-button');

        this.grid = $$('#dataview-table-items tr');

        this.formSave = $('#form-submit-button');
        this.formNumber = element(by.name('invoiceNumber'));
        this.formDate = element(by.name('date'));
        this.formCustomer = $('select[name=customerId]');
        this.formCancel = $('#form-cancel-button');
    }

    selectCustomer(name){
        this.formCustomer.click();
        browser.sleep(1000);
        let customer = element(by.cssContainingText('select[name=customerId] option', name));
        customer.click();
    }

    go(){
        browser.get('/invoices');
    };
    
}

module.exports = Invoices;