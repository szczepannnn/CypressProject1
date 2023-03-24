/*
.should('have.length',4)  //used for checking the lenght of parameter if needed
cy.get('.list-item').should('have.length',3) //check the amount of parameters on the list

.should('exist')
.should('not.exist') check if element exists or not exist

.should('have.class','list-item-selected') checking the class of the input
.should('have.css','background-color','blue') //checking the css attributes for example background color

.invoke('text')
.should('contain')
.should('not.contain')

cypress wont retry interactive commands such as .click() or .type()

cypress will retrey only the last command or assertion until it passed or until the timeout is reached (will not go back to another line but uonly single line will be retryed)

.then(() => {
    debugger;
 }); -> pauses the test on this line
or
.debug()

*/