'use strict';

class Login {
    constructor(){
        this.email = $('#email');
        this.password = $('#password');
        this.loginButton = $('div[id=login-with-password] button[class*=login-button]');
        this.warningMessage = $('#login-errors');
    };
    go(){
        browser.get('/login');
    };
    with(email,password){
        this.email.clear().sendKeys(email);
        this.password.clear().sendKeys(password);
        this.loginButton.click();
        browser.sleep(1000);
    };
};

module.exports = Login;