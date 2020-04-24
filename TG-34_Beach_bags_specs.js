describe('/beach-bags', () => {

    beforeEach(() => {
        cy.visit('/shop/category/beach-bags.html/')
    })


    it('greets with Beach Bags', () => {
        cy.contains('h2', 'Beach bags')

    })

    it('has breadcrumb Home -> Beach bags', () => {
        cy
            //Breadcrumb Home
            .get('.breadcrumb > :nth-child(1) > a')       
            .should('have.text', 'Home')
            .and('have.attr', 'href', 'http://localhost:8080/shop/ref=c:1')

            //Breadcrumb Beach bags
            .get('.breadcrumb > :nth-child(2) > a')
            .should('have.text', 'Beach bags')
            .and('have.attr', 'href', 'http://localhost:8080/shop/category/beach-bags.html/ref=c:1')
    })

    it('has Main Menu with Handbags, Beach bags, Laptop bags and Bags', () => {
        cy
            .get('#main_h')
            .should('contain', 'Handbags')
            .and('contain', 'Beach bags')
            .and('contain', 'Laptop Bags')
            .and('contain', 'Bags')    
    })

    it('has functional Main Menu buttons', () => {
        cy      .get('.mainmenu > nav > ul > :nth-child(1) > a')
            .should('have.attr', 'href', '/shop/category/handbags.html/ref=c:1,2' )

        cy  .get('.mainmenu > nav > ul > :nth-child(2) > a')
            .should('have.attr', 'href', '/shop/category/beach-bags.html/ref=c:1' )

        cy  .get('.mainmenu > nav > ul > :nth-child(3) > a')
            .should('have.attr', 'href', '/shop/category/laptop-bags.html/ref=c:1,3' )

        cy  .get('.mainmenu > nav > ul > :nth-child(4) > a')
            .should('have.attr', 'href', '/shop/category/bags.html/ref=c:1,4')


    })

  
    it('sorts by name', () => {

    })

    it('sorts by price', () => {

    })

    it('displays retro collection', () => {

    })

    it('displays Beach collection', () => {

    })

    it('add items to shopping chart', () => {

    })

    it('does more stuff?', () => {

    })

    
}) //end describe