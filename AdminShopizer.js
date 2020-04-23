/// <reference types="cypress" />

describe('shopizer admin test', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:8080/admin');

    })
    
    //T 26
    it('Som admin vill jag ändra shoppens valuta till SEK', ()=> {

        //skriv username
        cy.get(':nth-child(1) > .controls > #username').type('admin')

        //verifiera att username stämmer
        .should('have.value', 'admin')
        
        //fyll in password 
        cy.get('#password')
        
        //verifiera att rutan är tomt
        .should('be.empty')
        
        //skriva password och verifiera att det stämmer
        .type('password').should('have.value', 'password')

        //verifiera att remember me boxing är inte checkad
        cy.get('#remember').should('not.be.checked')
        
        //check in boxen och verifiera att det är checkad
        .check().should('be.checked')
        cy.get('#formSubmitButton').click()

        // expected url
        cy.url().should('include', '/home.html')

        //verifiera att store syns på sida
        cy.contains('Store').should('be.visible').click()


        // expected url
        cy.url()
            .should('include', '/store/store.html')
        cy.scrollTo('center')
            
        cy.get('#currency\\.id').select('SEK').should('have.value', '36')
        cy.get('.btn').click()

        
        cy.get('#store\\.success').should('have.text', 'Request completed with success')

        cy.url()
            .should('include', '/store/save.html')

    })


})    