'use strict';

class Customer {
    constructor(){
        this.newCustomer = $('#dataview-insert-button');
        this.alertInfo = $('#content div[class*=alert-info]');
        this.searchField = $('#dataview-search-input');
        this.searchButton = $('#dataview-search-button');

        this.grid = $$('#dataview-table-items-row');
        this.delete = $('#delete-button');
        this.confirmDel = element(by.cssContainingText('.modal-footer button[class*=btn-danger]', 'Sim'));

        this.formName = element(by.name('name'));
        this.formPhone = element(by.name('phone'));
        this.formEmail = element(by.name('email'));
        this.formGenderM = element(by.name('radio-m'));
        this.formGenderF = element(by.name('radio-f'));
        this.formType = $('#type-customer');
        this.formNotes = element(by.name('note'));
        this.formCheckbox = $('.checkbox input');
        this.formSave = $('#form-submit-button');
        this.formCancel = $('#form-cancel-button');

        this.emailError = $('.field-email span[id=error-text]');
    }

    selectType(name){
        this.formType.click();
        browser.sleep(1000);
        let customer = element(by.cssContainingText('#type-customer option', name));
        customer.click();
        browser.sleep(1000)
    }

    go(){
        browser.get('/customers');
        browser.sleep(2000);
    };
}

module.exports = Customer;