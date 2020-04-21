describe('shopizer test', function (){
    it('open browser', function(){
        cy.visit('http://localhost:8080/shop/');
    })

    it('som kund vill jag kunna lägga produkt i kundvagn', function(){
        cy.get('a').contains('Beach bags').should('be.visible','bags').click()
        cy.contains('Vintage exotik carry bag').click({force:true})
        cy.get('.store-btn > .btn').click()
        cy.get('#miniCartSummary > a').click({force:true})
        
        
        //cy.get('button').contains('Add to cart').click()
        
        cy.get('#miniCartDetails > li.checkout-bg > a').should('be.hidden').click({force:true})
        cy.get('.col-sm-4').should('be.visible')
        cy.get('.logoImage').click()
        cy.get('[item-order="3"] > .thumbnail > a').click()
        cy.get('.image-link > img').should('be.visible')
        cy.get('.store-btn > .btn').click()
        cy.get('#miniCartDetails > li.checkout-bg > a').should('not.visible').click({force:true})
        cy.get('.table-content').should('be.visible')
        
        
    })
    
   it('byta sidan', function(){
        cy.visit('https://www.google.com/');
    })
    it('tillbaks på shopizer', function(){
        cy.visit('http://localhost:8080/shop/cart/shoppingCart.html');
    })
})