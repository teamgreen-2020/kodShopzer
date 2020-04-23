describe('TG-14 Som en kund vill jag kunna registrera mig', () => {
    
    before(() => {
        cy.visit('/')

        //select My Account
        cy.get('li.click_menu').should('contain.text', 'My Account').click()

        //selct Register
        cy.get('#registerLink').should('have.text', 'Register').click()
    })

    beforeEach(() => {
        cy.visit('/shop/customer/registration.html')
        
        //fill out registration form (source: support/commands.js)
        cy.fillAndVerifyRegistrationForm()
    })

    it('greets you with "Personal information"', () => {
        cy.contains('h3', 'Personal information')
    })

    it('requires first name', () => {
        cy
             //submit form with blank first name field
            .get('#firstName')
            .clear()
            .get('form').eq(1).submit()

        cy
            //verify error message
            .get('.error')
            .should('have.text', 'Field required')
    })

    it('requires email address', () => {
        cy
            //submit form with bland email field
            .get('#emailAddress')
            .clear()
            .get('form').eq(1)
            .submit()

        cy
            //verify error message
            .get('.error')
            .should('have.text', 'Email address is required')
    })

    it('rejects invalid email address', () => {
        cy
            //submit form with invalid email
            .get('#emailAddress')
            .clear()
            .type('badFormedEmailAddress.com{enter}')

        cy
            //verifies error message
            .get('.error')
            .should('exist')
            .and('have.text', 'Email address is invalid')
    })

    it('requires both passwords to match', () => {
        cy  
            //changes Password field
            .get('#password')
            .clear()
            .type(Cypress.env('password')+'.')

        cy  
            //verify error message
            .contains('Both password must match')
    })

    it('requires password to be at least six characters', () => {
        cy
            //type 5 character password in first password field
            .get('#password')
            .clear()
            .type('AbC12')

        cy    
            //type the same 5 char password in second field
            .get('#passwordAgain')
            .clear()
            .type('AbC12')

            //verify error message
            cy.contains('Password must be at least 6 characters')
    })

    it('successfully registers new user', () => {
        cy
            //sbumit form
            .get('form').eq(1).
            submit()

        cy
            //verfies registation success
            .location('pathname')
            .should('eq', '/shop/customer/dashboard.html')   
    })

    
}) //end describe