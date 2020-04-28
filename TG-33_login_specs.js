/**
 * Author: Niklas
 */

describe('/login', () => {

    beforeEach(() => cy.visit('/shop/customer/customLogon.html'))

    it('greets with Registered customer', () => {
        cy.contains('h3', 'Registered customer')
    })

    it('links to /shop/customer/registration.html', () => {
        cy
            .get('a\.login-btn')
            .should('have.text', 'Register')
            .and('have.attr', 'href', '/shop/customer/registration.html')
    })

    //negative test: blank email and password fields 
    it('requires email address', () => {
        cy  
            .get('form')
            .contains('Sign in')
            .click()
            
            .get('#loginError')
            .should('contain', 'Login Failed')
    })

    //negative test: invalid password
    it('requires correct password', () => {
        cy  
            .get('#signin_userName')
            .type(Cypress.env('email'))

            .get('#signin_password')
            .type('invalid{enter}')          

            .get('#loginError')
            .should('contain', 'Login Failed')
    })

    it('navigates to /shop/customer/dashboard.html on successful login', () => {
        cy  
            .get('#signin_userName')
            .type(Cypress.env('email'))

            .get('#signin_password')
            .type(Cypress.env('password')+'{enter}')

            cy.location('pathname').should('eq', '/shop/customer/dashboard.html')
    })

})
