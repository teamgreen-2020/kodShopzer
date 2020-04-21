/// <reference types="cypress" />

describe('shopizer tester', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:8080/shop/');

    })

    it('Som en användare vill jag kontakta Shopizer via hemsidans kontaktformulär', ()=>{
        cy.contains('Contact us').click()
        cy.get('#name').type('Aris').should('have.value', 'Aris')
        cy.get('#email').type('aris@shopizer.com')
        .should('contain.value', 'aris@shopizer.com')
        cy.get('#subject', {timeout:3000}).should('be.empty').type('suggestions')
        .should('have.value','suggestions')
        cy.get('#comment').type('bla bla bla bla')
        // alla rader ovan är gröna :)  fixa där nere

        cy.get('iframe').contains('#recaptcha-anchor > div.recaptcha-checkbox-border').click({force:true})
    })
})