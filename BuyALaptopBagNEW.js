//As a customer i would like to add a Laptopbag to the cart so that i can purchase it and checkout

describe('As a Customer i would like to purchase a laptopbag', ()=> {
    it('adds the product to the cart', () => {
cy.visit("http://localhost:8080") 

//click Laptopbags
cy      
        .get('a')
        .contains(" Laptop Bags")
        .click();

cy      .get('.shop-banner-title')
        .contains('Laptop Bags')

//choose product

cy
        .get('a[productid=8]')
        .contains('Add to cart')
        .click()

cy      
        .get('.cc-btn').click()
cy
        .get('#hiddenSearchForm')
        .click({ force: true });
//Checkout
cy      
        .contains('Checkout')
        .click({ force: true });

cy      .get('.entry-title')
        .contains('Review your order')
        

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

cy      .get('[name="customer.billing.firstName"]')
        .type('Fuuddddu')
        
cy      .get('[name="customer.billing.lastName"]')
        .type('Bol Bol')

cy      .get('[name="customer.billing.address"]')
        .type('Ghar ka Address 0')

cy      .get('[name="customer.billing.city"]')
        .type('Fumbai')

cy      .get('[name="customer.billing.postalCode"]')
        .type('46464646')

cy      .get('[name="customer.emailAddress"]')
        .type('fuddubolbol@gmail.com')

cy      .get('[name="customer.billing.phone"]')
        .type('666666666')        

cy      .get('[name="customer.billing.country"]')
        .select('India')
/*
cy      .get('[name="customer.billing.stateProvince"]')
        .select('QC')
   */     
cy      .get('#submitOrder')
        .click()

cy      .get('h1')
        .contains('Order completed')

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
