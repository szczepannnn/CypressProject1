describe('Text box with max character', () => {
    it('displays the appropriate remaining character count first name', () => {
        cy.visit('http://localhost:3000/example-3');
        //eq(n) is also not correct approach to select object which should be tested
        cy.get('[data-cy="first-name-chars-left-count"]')
            //.eq(1)
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-first-name"]')/*.eq(1)*/.type('Hello');

        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-first-name"]').type('12345678910');

        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    });
    it('prevents from insterting too long string first name', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-first-name"]').type('HelloHelloHelloHello');
        
        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');

        cy.get('[data-cy="input-first-name"]').type('HelloHelloHelloHello')
            .should('have.attr', 'value', 'HelloHelloHello');
    });
    it('displays the appropriate remaining character count last name', () => {
        cy.visit('http://localhost:3000/example-3');
        //eq(n) is also not correct approach to select object which should be tested
        cy.get('[data-cy="last-name-chars-left-count"]')
            //.eq(1)
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

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]').type('HelloHelloHelloHello');
        
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');

        cy.get('[data-cy="input-last-name"]').type('HelloHelloHelloHello')
            .should('have.attr', 'value', 'HelloHelloHello');
    });
});