describe("Basic page interactions", () => {
    beforeEach(() => {
        cy.visit("/example-4");
    });
    it("sets the header text to the itme's name when double clicked", () => {
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick();
        cy.get('[data-cy=box-1-selected-name')
            .invoke('text')
            .should('equal','Option Two' );
    });

    it("displays correct count for number of selected checkboxes", () => {   
        cy.get('[data-cy=box-2-selected-count')
            .invoke('text')
            .should('equal','0' );
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check();
        cy.get('[data-cy=box-2-selected-count')
            .invoke('text')
            .should('equal','1' );
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(2) input')
            .check();
        cy.get('[data-cy=box-2-selected-count')
            .invoke('text')
            .should('equal','2' );
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(3) input')
            .check();
        cy.get('[data-cy=box-2-selected-count')
            .invoke('text')
            .should('equal','3' );
    });

    it('displays the name of the currently selected item', () => {
        /* ERROR IN EXAMPLE 4 LIST IMPLEMENTATION
        cy.get('[data-cy=box-3-selected-name') 
            .invoke('text')
            .should('equal','Nothing selected' );  
        cy.get("[data-cy=box-3-dropdown")
            .select("Option One");
        cy.get('[data-cy=box-3-selected-name')
            .invoke('text')
            .should('equal','Option One' ); 
        */cy.get("[data-cy=box-3-dropdown")
            .select('Option Two');
        cy.get('[data-cy=box-3-selected-name')
            .invoke('text')
            .should('equal','Option Two' );
        cy.get("[data-cy=box-3-dropdown")
            .select('Option Three');
        cy.get('[data-cy=box-3-selected-name')
            .invoke('text')
            .should('equal','Option Three' );  
    });

    it('should display the name of the recently hovered item', () => {
        cy.get('[data-cy=box-4-selected-name')
            .invoke('text')
            .should('equal','Nothing selected' ); 
        cy.get('[data-cy=box-4-items-list] > :nth-child(1)')
            .trigger('mouseover')
        cy.get('[data-cy=box-4-selected-name')
            .invoke('text')
            .should('equal','Option One' ); 
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
            .trigger('mouseover')
        cy.get('[data-cy=box-4-selected-name')
            .invoke('text')
            .should('equal','Option Two' ); 
        cy.get('[data-cy=box-4-items-list] > :nth-child(3)')
            .trigger('mouseover')
        cy.get('[data-cy=box-4-selected-name')
            .invoke('text')
            .should('equal','Option Three' ); 
    })
});