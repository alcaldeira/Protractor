'use strict';

const faker = require('faker');

const Register = require('../pages/register_po.js')
const Dashboard = require('../pages/dashboard_po.js')

const register = new Register();
const dashboard = new Dashboard();

describe('Register:', ()=>{
    beforeAll(()=>{
        register.go();
    });
    afterEach(()=>{
        browser.sleep(1000);
    });
    it('with invalid email.', ()=>{
        const fakerName = faker.name.findName();
        register.with(fakerName,'teste','emailinvalid');
        expect(register.warningMessage.getText()).toEqual('Please enter valid e-mail address.');
    });
    it('with invalid password.', ()=>{
        const fakerName = faker.name.findName();
        const fakeEmail = faker.internet.email();
        register.with(fakerName, fakeEmail,'1');
        expect(register.warningMessage.getText()).toEqual('Your password must be at least 6 characters long.');
    });
    it('with a email that already exists', ()=>{
        const fakerName = faker.name.findName();
        register.with(fakerName,'anderson@protractor.com','teste1234');
        expect(register.warningMessage.getText()).toEqual('Email already exists. [403]');
    });
    it('with success', ()=>{
        const fakeName = faker.name.findName();
        const fakeEmail = faker.internet.email();
        register.with(fakeName, fakeEmail, 'teste1234');
        browser.wait(dashboard.title.isPresent()).then(()=>{
            expect(dashboard.title.getText()).toEqual('Olá, '+fakeName+', seja bem vindo ao Invoices...');
        });
    });
});