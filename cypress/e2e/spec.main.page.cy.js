const selectors = require("../fixtures/selectors.json");

it("Should be on the main page", () => {
    cy.visit("/");
    cy.get(selectors.title).should("contain", "Идёмвкино");
    cy.get(selectors.day).should("have.length", 7);
    cy.get(selectors.movie).should("be.visible");
    cy.get(selectors.time).should("be.visible");
});