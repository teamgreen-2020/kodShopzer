/**
 * Author: Niklas
 */

describe('TG-13 Som admin vill jag ändra status på lagd order', () => {

    it('sets order status "delivered" on most recent order', () => {
    //beforeEach(() => { 
        //VILL HELST HA before(), MEN BLIR UTSLÄNGD!
        cy.visit('/admin/logon.html')

        //LOGIN
        cy  .get(':nth-child(1) > .controls > #username')
            .type('admin@shopizer.com')
            .should('have.value', 'admin@shopizer.com')

        cy  .get('[name=password]')
            .type('password')
            .should('have.value', 'password')

        cy  
            .get('input[type="checkbox"]').check()
            .should('have.attr', 'id', 'remember')
            .should('be.checked')

        cy  .get('#formSubmitButton')
            .should('contain', 'Logon')
            .click()
    //})

    //it('navigates to /admin/home.html', () => {
        cy  .location('pathname')
            .should('eq', '/admin/home.html')
    //})

    //it('displays Store information', () => {
        cy  .get('.box-title')
            .should('contain', 'Store information')
    //})
    
    //it('displays orders', () => {
        cy  .get(':nth-child(9) > a')
            .should('have.attr', 'href', '/admin/orders/list.html')
            .and('contain', 'Orders')
            .click()
    //})      
        //cy.contains('h3', 'Recent orders')


    //it('displays details of most recent order', () => {
        cy  .get('#isc_1D > table > tbody > tr > .buttonTitle')
            .should('have.text', 'Details')
            .click()
    //}) 

        //set order status "delivered"
        cy  .get('select[id="order.status"]')
            .should('contain', 'DELIVERED')
            .select('DELIVERED')

        //save
        cy.get('.form-actions > .btn').click()

        //verify delivered status in top of page
        cy  .get('.lead')
            .should('have.text', 'delivered')

        //verify sucess message
        cy  .get('div[id="store\.success"')
            .eq(0)
            .should('have.text', 'Request completed with success') 
            
    })

})//end describe