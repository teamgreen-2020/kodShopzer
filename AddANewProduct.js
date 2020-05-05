// As a admin i would like to Add a new product so that we have 1 new Product.
describe("it registers a new product", function(){
    it.only('logs in as a admin', () => {
cy      .visit('http://localhost:8080/admin/')

cy      .get(':nth-child(1) > .controls > #username')
        .type("admin@shopizer.com")

cy      .get('#password')
        .type("password")

cy      .get('#formSubmitButton')
        .click()

cy      .get(':nth-child(4) > a')
        .click()

cy      .get('.active > .dropdown-toggle')
        .click({ force: true });

cy      
        .contains('Products')
        .click({ force: true });

        
cy      
        .contains('Create product')
        .click({ force: true });


cy      .get('[name="product.sku"]')
        .type('143006')


cy      .get('[name="product.refSku"]')
        .type('111')

cy      .get('[name="descriptions[0].name"]')
        .type('Diamond Quilted')

 cy     .get('[name="descriptions[0].seUrl"]')
        .type('https://www.chanel.com/se/fashion/classic/c/1x3x14x1/handbags/')

 cy     .get('[name="descriptions[1].name"]') 
        .type('Den Kan Allt SPEZIALLE')

cy      .get('#productPriceAmount')
        .type(3500)

cy      .get('#quantity')
        .type('1000')

cy      .get('#ordermin')
        .type('1')

cy      .get('#ordermax')
        .type('9')

cy      .get('[name="product.productShipeable"]')
        .click()

cy      .get('.btn')
        .click()
        

    });
});