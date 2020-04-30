/**
 * Author: Aris
 */ 


/// <reference types="cypress" />

describe('shopizer 2.11 admin test', ()=>{
    beforeEach(()=>{
        cy.loginAdmin()
        cy.visit('http://localhost:8080/admin/home.html')

    })

//Alla tester nedan måste man vara inloggad som admin
    
    //TG-26
    it('Som admin vill jag ändra shoppens valuta till SEK', ()=> {
        cy.contains('Store')
          .should('be.visible')
          .click()

        cy.url()
          .should('include', '/store/store.html')

        cy.scrollTo('center')    
        cy.get('#currency\\.id')
          .select('SEK')
          .should('have.value', '36')

        cy.get('.btn')
          .click() 

        cy.get('#store\\.success')
          .should('have.text', 'Request completed with success')

        cy.url()
          .should('include', '/store/save.html')

    })

    //TG-13
    it('ändra orders status', ()=> {

        cy.get(':nth-child(9) > a')
          .should('be.visible')
          .should('contain','Orders')
          .click()
        
        cy.url().should('include', '/orders/list.html')

        cy.get('#isc_1D > table > tbody > tr > .buttonTitle')
          .click()

        cy.get('h3')
          .contains('Order ID 1')
          .should('be.visible')

        cy.scrollTo('bottom')
        cy.get('#order\\.status')
          .select('REFUNDED')
          .should('have.value', 'REFUNDED')

        cy.get('#orderHistoryComment')
          .type('you will have ur refund next week on monday')
          .should('have.value', 'you will have ur refund next week on monday')

        cy.get('.form-actions > .btn')
          .click()

	cy.get('.lead')
          .should('have.text', 'refunded')

        cy.get('#store\\.success')
          .eq(0)
          .should('have.text', 'Request completed with success')  

        //cy.get('#store\\.success').should('have.text', 'Request completed with success')
        
    })

})