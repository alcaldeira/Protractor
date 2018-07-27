'use strict';

class Dashboard {
    constructor(){
        this.title = $('#page_title');
        this.userMenu = $('#usermenu');
        this.logout = element(by.cssContainingText('.item-title','Sair'))
    };
}

module.exports = Dashboard;