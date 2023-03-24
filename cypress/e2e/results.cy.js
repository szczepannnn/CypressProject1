describe('Text box with max character', () => {
    it('displays the appropriate remaining character count first name', () => {
        cy.visit('http://localhost:3000/example-3');
        
        //aliases
        cy.get('[data-cy="first-name-chars-left-count"]')
            .as('charsLeftSpan') 
        
        cy.get('[data-cy="input-first-name"]')
            .as('charInput')
        
            //test starts
        cy.get('@charsLeftSpan') //working on result
            .then($charsLeftSpan => {
                expect($charsLeftSpan.text()).to.equal('15');
            });
        
        cy.get('@charsLeftSpan')
            //.eq(1) - eq(n) is also not correct approach to select object which should be tested
            .invoke('text')
            .should('equal', '15');

        cy.get('@charInput')/*.eq(1)*/.type('Hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charInput').type('12345678910');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });
    it('prevents from insterting too long string first name', () => {
        cy.visit('http://localhost:3000/example-3');
        
        //aliases
        cy.get('[data-cy="input-first-name"]')
        .as('charInput')

        //test starts
        cy.get('@charInput').type('HelloHelloHelloHello');

        cy.get('@charInput').type('HelloHelloHelloHello')
            .should('have.attr', 'value', 'HelloHelloHello');
    });
    it('displays the appropriate remaining character count last name', () => {
        cy.visit('http://localhost:3000/example-3');
        
        cy.get('[data-cy="last-name-chars-left-count"]')
            //.eq(1) - eq(n) is also not correct approach to select object which should be tested
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]')/*.eq(1)*/.type('Hello');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]').type('12345678910');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    });
    it('prevents from insterting too long string last name', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]').type('HelloHelloHelloHello');
        
        cy.get('[data-cy="input-last-name"]').type('HelloHelloHelloHello')
            .should('have.attr', 'value', 'HelloHelloHello');
    });
});