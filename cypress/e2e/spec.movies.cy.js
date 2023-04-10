const seats = require('../fixtures/seats');

describe('site view', () => {
    it('Should dispalay 7 days', () => {
        cy.visit('/');
        cy.get('.page-nav__day').should('have.length', 7);
    });

    it.only('ticket reservation', () => {
        cy.visit('/');
        cy.get('.page-nav__day').eq(5).click();
        cy.get('.movie').first().contains('09:00').click();
        seats.forEach((seat) => {
            cy.get(`.buying-scheme__row:nth-of-type(${seat.row})`).within(() =>{
                cy.get(`.buying-scheme__chair:nth-of-type(${seat.seat})`).click();
            });
        });
        cy.get('.acceptin-button').click();
        cy.contains('Получить код бронирования').click();
        cy.get('.ticket__info-qr').should('be.visible');  
    });
});