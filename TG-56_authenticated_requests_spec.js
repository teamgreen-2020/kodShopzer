/**
 * Author: Niklas
 * code inspired by:
 * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/logging-in__jwt/cypress/integration/spec.js
 */

let user

before(function fetchUser () {
  cy.request('POST', '/api/v1/private/login', {
    password: 'password',
    username: 'admin@shopizer.com'
  })
  .its('body')
  .then((res) => {
    user = res
  })
}) 

describe('API requests', () => {
  it('gets users', () => {
    cy.request({
      url: '/api/v1/private/users/',
      auth: {
        bearer: user.token,
      },
    })
    // .its('headers.content-type')
    // .should('include', 'application/json')
     .its('body.recordsTotal')
     .should('eq', 1)  
  })

  it('gets orders', () => {
      cy.request({
        url: '/api/v1/private/orders',
        auth: {
          bearer: user.token,
        },
      })
      .its('body')
      .should('be.an','Object')
      .and('have.property', 'orders')
})

  it('gets product 10', () => {
      cy.request({
        url: '/api/v1/products/10',
        auth: {
          bearer: user.token,
        },
      })
      .its('body.id')
      .should('eq', 10)
    })

})