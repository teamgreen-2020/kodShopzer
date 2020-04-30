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
import { watchFile } from "fs"

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
        .get('select[id="registration_country"]')
        //.get('select[data-layer="Content"]')
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


Cypress.Commands.add('customerLoginAPI', (user, psw) => {
    cy.request({
        method:'POST',
        url:'http://localhost:8080/shop/customer/logon.html',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: {
            'userName': user,
            'password': psw,
            'storeCode': 'DEFAULT'
        }
        })
        .then((resp) =>
        {
            expect(resp.status).to.eq(200);
            expect(resp.body).to.include(user);
        })
        cy.getCookie('user').should('exist')
    });

    //GUI CUSTOMER LOGIN:
        // cy.visit('/shop/customer/customLogon.html')
        // cy.get('#signin_userName').type(Cypress.env('email'))
        // cy.get('#signin_password').type(Cypress.env('password') +'{enter}')
        // cy.wait(700)
        // cy.getCookie('user').should('exist')

    
    
        /* FUNKAR EJ! PGA RE-DIRECTS ??  302 */
    Cypress.Commands.add('adminLoginAPI', (user, psw) => {
        cy.request({
            method:'POST',
            url:'http://localhost:8080/admin/performUserLogin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBzaG9waXplci5jb20iLCJhdWQiOiJhcGkiLCJleHAiOjE1ODg4NzMzOTMsImlhdCI6MTU4ODI2ODU5M30.r05gWQ80112siT3ST1AJ0bCVNlaWbo1bmtNXDE_nhltXeJWuhJEaSeavGpPiVJvCSUqOHGFfZ-leTisPLbrk7A'
            },
            body: {
                'userName': user,
                'password': psw,
                //'storeCode': 'DEFAULT'
            }
            })
            .then((resp) =>
            {
                expect(resp.status).to.eq(200);
            })
            cy.getCookie('JSESSIONID').should('exist')
        });


//TODO: create and delete customer? - create and delete user? 
//create and delete order? 

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

