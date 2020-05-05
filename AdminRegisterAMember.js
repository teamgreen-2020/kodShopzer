// As a admin i would like to Register a new customer so that we have 1 registered.
describe("it registers a new customer", function(){
    it.only('logs in as a admin', () => {
cy      .visit('http://localhost:8080/admin/')

cy      .get(':nth-child(1) > .controls > #username')
        .type("admin@shopizer.com")

cy      .get('#password')
        .type("password")

cy      .get('#formSubmitButton')
        .click()

cy      .contains('Customers')
        .click()

cy      .contains('List of customers')
        .click()

cy      .contains('Create customer')
        .click()

cy      .get('[name="billing.firstName"]')
        .type('Fuddu')

cy      .get('[name="billing.lastName"]')
        .type('duddu') 

cy      .get('[name="billing.company"]')
        .type('Meri')

cy      .get('[name="billing.address"]')
        .type('Boondi Raita 19')

cy      .get('[name="billing.city"]')
        .type('Pondo') 

cy      .get('[class="billing-country-list"]')
        .select('Sweden')

cy      .get('[name="billing.postalCode"]')
        .type('146118')

cy      .get('[name="emailAddress"]')
        .type('fuddu-duddu@karona-mail.se') 

cy      .get('[name="billing.telephone"]')
        .type('06-666666')

cy      .get('[name="delivery.company"]')
        .type('LeloFreeMe AB')

cy      .get('[name="delivery.firstName"]')
        .type('Fuddu')

cy      .get('[name="delivery.lastName"]')
        .type('duddu')

cy      .get('[name="delivery.address"]')
        .type('Boondi Raita 19')

cy      .get('[name="delivery.city"]')
        .type('Pondo') 

cy      .get('[class="delivery-country-list"]')
        .select('Sweden')

cy      .get('[name="delivery.postalCode"]')
        .type('146118')
        
cy      .get('[class="btn btn-success"]')
        .click()

});
});

