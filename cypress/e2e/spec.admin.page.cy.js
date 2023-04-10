const logins = require('../fixtures/login');
describe ('for admin and user' , () => {
    it('happy path', () => {
        cy.visit('http://qamid.tmweb.ru/admin');
        cy.login(logins.login, logins.pass);
        cy.contains('Управление залами').should('be.visible');
    });
    it('sad path', () => {
        cy.visit('http://qamid.tmweb.ru/admin');
        cy.login(logins.login, logins.badPass);
        cy.contains('Ошибка авторизации!').should('be.visible');
    });
});