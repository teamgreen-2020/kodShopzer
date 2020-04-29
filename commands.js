// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { Agent } from "http"

Cypress.Commands.add('fillAndVerifyRegistrationForm', () => {

    cy
        .get('#firstName')
        .type(Cypress.env('first_name'))
        .should('have.class', 'required')
        .and('have.value', Cypress.env('first_name'))

    cy
        .get('#lastName')
        .type(Cypress.env('last_name'))
        .should('have.class', 'required')
        .and('have.value', Cypress.env('last_name'))

    cy
        .get('#registration_country')
        .select('Sweden')
        .should('have.value', 'SE')
        .and('be.visible') // <<--- testar den rätt grej?
    cy
        .get('#hidden_zones')
        .type('Stockholms län')
        .should('have.attr', 'name', 'billing\.stateProvince')
        .and('have.value', 'Stockholms län')

    cy
        .get('#emailAddress')
        .type(Cypress.env('email'))
        .should('have.class', 'required')
        .and('have.attr', 'name', 'emailAddress')
        .and('have.value', Cypress.env('email'))

    cy
        .get('#password')
        .type(Cypress.env('password'))
        .should('have.class', 'password')
        .and('have.attr', 'type', 'password')
        .and('have.value', Cypress.env('password'))

        .get('#passwordAgain')
        .type(Cypress.env('password'))
        .should('have.class', 'checkPassword')
        .and('have.attr', 'type', 'password')
        .and('have.value', Cypress.env('password'))
})

//********************************************************************************* */

/**
 * Author: Aris
 */ 

// Admin inloggningsuppgifter till TG-26 och TG-13

Cypress.Commands.add('loginAdmin', () => { 
    cy.visit('http://localhost:8080/admin/')
    cy.get(':nth-child(1) > .controls > #username').type('admin@shopizer.com')
    cy.get('#password').type('password')
    cy.get('#remember').check()
    cy.get('#formSubmitButton').click()
    cy.url().should('include', '/home.html')

})

//********************************************************************************* */

/**
 * 
 * OBS! 
 * 
 * ALLT NEDAN ÄR MISSLYCKADE FÖRSÖK ATT FÅ TILL EN LOGIN-FEATURE. 
 * IGNORERA, ÄN SÅ LÄNGE... :(
 * 
 * 
 */

//import "cypress-localstorage-commands";

Cypress.Commands.add('login', () => {

/*
    cy.visit('/shop/customer/customLogon.html')
    cy.get('#signin_userName').type('tolvan@mailinator.com')
    cy.get('#signin_password').type('password12{enter}')
  
  */  

    //login programmaticlly
    cy.visit('/shop/customer/customLogon.html')
    cy.request({
        method: 'POST',
        url: '/api/v1/customer/login',
        body: {
            "password": "password12",
            "username": "tolvan@mailinator.com"
        }
    })
   .then((resp) => {
        //'jwt' eller 'Authorization'? 'token'? 'Bearer'? 'user'?
        window.localStorage.setItem('jwt', resp.body.token)
        //Cypress.Cookies.debug(true)
    })

    // cy.setCookie('user', 'DEFAULT_tolvan@mailinator.com')
    // cy.setCookie('JSESSIONID', '360EE062FDF58DC3BA828508DBCA0264')
    // cy.setCookie('cart', 'DEFAULT_efcbd4c91f1f40519b13bd509742cd23')


    //cy.getCookie('cypress-session-cookie').should('exist')  // <-- NULL! ????

})

