describe ("FirstTest", () => {
    beforeEach(() => {
        cy.viewport(1920,1080);
    });
    
    it("FirstTestScenario1",() => {
        cy.visit('https://www.google.com');
    });
});