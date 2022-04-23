/// <reference types ="Cypress"/>


it('open website',function () {
    cy.visit('./Swvl-test.html')
    cy.get('.btn').click();
    cy.get('.dropdown > :nth-child(2) > :nth-child(3)').click();
    cy.get('[style="display: block;"] > .dropdown-submenu ').click();
    cy.get(':nth-child(3) > :nth-child(2) > .dropdown-submenu').click();

})