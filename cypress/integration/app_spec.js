describe('App renders', () => {
  it('As a user, I should be able to visit the page and it will render the correct elements', () => {
    cy.visit('http://localhost:3000')
      .contains('Sick Trick Wish List')
      .get('form')
        .type('text')
  })

  it('should be able to select the name, stance, obstacle, and tutorial inputs and fill them with the corresponding values', () => {
    cy.get('input[name="stance"]')
      .type('text')
    cy.get('input[name="name"]')
      .type('text')
    cy.get('input[name="obstacle"]')
      .type('text')
    cy.get('input[name="tutorial"]')
      .type('text')
  })

  it('should be able to display the three existing tricks from the API', () => {
    cy.visit('http://localhost:3000')
      .contains('regular treflip')
    cy.visit('http://localhost:3000')
      .contains('switch heelflip')
    cy.visit('http://localhost:3000')
      .contains('regular frontside 50-50, backside 180 out')
  })
});
