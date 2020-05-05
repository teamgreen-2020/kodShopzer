//As a customer i would like to add a Laptopbag to the cart so that i can purchase it and checkout

describe('As a Customer i would like to purchase a laptopbag', ()=> {
    it('adds the product to the cart', () => {
cy.visit("http://localhost:8080") 
cy      
        .get(':nth-child(2) > .dropdown-toggle')    
        .click();
//click Laptopbags
cy      
        .get('a')
        .contains(" Laptop Bags")
        .click();
//choose product
cy
        .get('a[productid=8]')
        .contains('Add to cart')
        .click()
cy
        .get('#hiddenSearchForm')
        .click({ force: true });
//Checkout
cy      
        .contains('Checkout')
        .click({ force: true });
        

cy      
        .get('.wc-proceed-to-checkout > a')
        .click()
        .wait(500)
//Log in
cy      
        .contains('My Account')
        .click({ force: true });

cy      
        .contains('Sign in')
        .click({ force: true });
        
cy      
        .get('#signin_userName')
        .type('Karona-mail@hemail.com')


cy
        .get('#signin_password')
        .type('Aftonbladet2020')


cy
        .get('#genericLogin-button')
        .click()

        cy
        .get('#hiddenSearchForm')
        .click({ force: true });

cy      
        .contains('Checkout')
        .click({ force: true });
        

cy      
        .get('.wc-proceed-to-checkout > a')
        .click()
        .wait(500)

        
cy      .get('[name="customer.billing.country"]')
        .select('China')

cy      .get('[name="customer.billing.stateProvince"]')
        .type('StockholmsLän')
        
cy      .get('#submitOrder')
        .click()

/*
cy      
        .get('[name="customer.billing.firstName"]')
        .type('Jamtara')


cy      
        .get('[name="customer.billing.lastName"]')
        .type('Nadu') 

cy      
        .get('[name="customer.billing.address"]')
        .type('Boondi Raita 19') 

        
cy      
        .get('[name="customer.billing.city"]')
        .type('London')

cy      
        .get('[name="customer.billing.country"]')
        .select('United Kingdom')

cy      
        .get('[name="customer.billing.stateProvince"]')
        .type('Any State')
        
cy      
        .get('[name="customer.billing.postalCode"]')
        .type('143565')
        

cy      
        .get('[name="customer.emailAddress"]')
        //.type('')


cy      
        .get('[name="customer.billing.phone"]')
        .type('08-606060')


/*cy      .get('#cbox')
        .check()
        .click({ force: true });*/
        });
});
