describe('Text box with max character', () => {
    it('displays the appropriate remaining character count', () => {
        cy.visit('http://localhost:3000/example-2');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input').type('Hello');

        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input').type('12345678910');

        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    });
    it('prevents from insterting too long string', () => {
        cy.visit('http://localhost:3000/example-2');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input').type('HelloHelloHelloHello');
        
        cy.get('span')
            .invoke('text')
            .should('equal', '0');

        cy.get('input').type('HelloHelloHelloHello')
            .should('have.attr', 'value', 'HelloHelloHello');
    });
});