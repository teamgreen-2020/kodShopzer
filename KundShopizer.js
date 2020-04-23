/// <reference types="cypress" />

describe('shopizer shop test', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:8080/shop/');

    })

    //T 25
    it('Som en användare vill jag kontakta Shopizer via hemsidans kontaktformulär', ()=>{
        cy.contains('Contact us').click()
        cy.get('#name').type('Aris').should('have.value', 'Aris')
        cy.get('#email').type('aris@shopizer.com')
        .should('contain.value', 'aris@shopizer.com')
        cy.get('#subject', {timeout:3000}).should('be.empty').type('suggestions')
        .should('have.value','suggestions')
        cy.get('#comment').type('bla bla bla bla').should('have.value', 'bla bla bla bla')

        cy.get('#submitContact').click()
        cy.get('#contactForm').should('contain.text', 'Your message has been sent')
        
    
    })
    
    //T 31
    it('Sort by name and later by price', ()=>{
        cy.get('.mainmenu > nav > ul > :nth-child(3) > a').click()
        cy.get('#filter', {timeout:5000}).select('Name')
        cy.contains('Name', {timeout:3000}).should('be.visible')
        cy.get('#filter').select('Price').should('have.value','item-price')
        

    })
})