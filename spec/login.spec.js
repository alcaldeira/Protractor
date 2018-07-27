'use strict';

const Login = require('../pages/login_po.js');
const Dashboard = require('../pages/dashboard_po.js')

const login = new Login();
const dashboard = new Dashboard();

describe('Login: ',()=>{
    beforeAll(()=>{
        dashboard.userMenu.click();
        dashboard.logout.click();
        browser.sleep(1000);
        login.go();
    });
    afterEach(()=>{
        browser.sleep(2000);
    });
    it('with incorrect email.',()=>{
        login.with('teste.com', '12345678');
        expect(login.warningMessage.getText()).toEqual('Informe um email válido.');
    });
    it('with incorrect password.',()=>{
        login.with('anderson@protractor.com', '12345678');
        expect(login.warningMessage.getText()).toEqual('Senha inválida.');
    });
    it('with success.', ()=>{
        login.with('anderson@protractor.com', 'protractor@10');
        browser.wait(dashboard.title.isPresent()).then(()=>{
            expect(dashboard.title.getText()).toEqual('Olá, Anderson, seja bem vindo ao Invoices. Aqui você pode cadastrar seus clientes e lançar suas faturas');
        });
    });
});
