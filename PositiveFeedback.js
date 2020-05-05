//As a User i would like to give some positive feedback, so that they know that they are doing a good job

describe('Positive feedback', ()=> {
    it('Positive feedback', () => {
cy      .visit("http://localhost:8080")

cy
        .get(':nth-child(2) > :nth-child(1) > .footer-wrapper > .usefull-link > :nth-child(2) > a')        .click()

cy      .get('#name')
        .type('Buddu Ram')

cy      .get('#email')
        .type('Buddu@karona-mail.com')

cy      .get('#subject')
        .type('Fantastisk')

cy      .get('#comment')
        .type('Jag hade problem med en väska, ringde in och fick fantastisk hjälp av en Harkanwal Singh som jobbar hos Er, Stort tack')

cy      .wait(500);

cy      
        .get('#submitContact')        .click()
 
         
         });
     });
 