'use strict';

class Register {
    constructor(){
        this.name = $('#register_name');
        this.email = $('#register_email');
        this.password = $('#register_password');
        this.registerButton = $('form[id=register_form] button[class*=btn-primary]');
        this.warningMessage = $('form[id=register_form] div[class*=alert-warning]');
    };

    go(){
        browser.get('/register');
    };

    with(name,email,password){
        this.name.clear().sendKeys(name);
        this.email.clear().sendKeys(email);
        this.password.clear().sendKeys(password);
        this.registerButton.click();
        browser.sleep(1000);
    };

};

module.exports = Register;