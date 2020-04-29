/**
 * Author: Aris
 */ 


/// <reference types="cypress" />

describe('shopizer 2.11 shop test', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:8080/shop/');

    })

    //T 25
    it('Som en användare vill jag kontakta Shopizer via hemsidans kontaktformulär', ()=>{
        
        cy.contains('Contact us', {timeout:5000}).click()

        cy.get('#name')
          .type('Aris')
          .should('have.value', 'Aris')

        cy.get('#email')
          .type('aris@shopizer.com')
          .should('contain.value', 'aris@shopizer.com')
        
        cy.get('#subject', {timeout:3000})
          .should('be.empty')
          .type('suggestions')
          .should('have.value','suggestions')

        cy.get('#comment') 
          .type('bla bla bla bla')
          .should('have.value', 'bla bla bla bla')

        cy.get('#submitContact').click()
        cy.get('#contactForm').should('contain.text', 'Your message has been sent')
        
    
    })
    
    //T 31
    it('Sort by price', ()=>{

        cy  .get('li:nth-child(2)')
            .contains('Handbags')
            .click({force:true})

        cy  .get('#filter').select('item-price')
            .should('have.value','item-price')
            .and('be.visible')
        
        cy  .contains('item-price').should('be.visible')
        

    })
})