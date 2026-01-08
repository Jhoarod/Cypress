describe('Google search test', () => {
  it('Searches for Cypress in Google', () => {
    cy.visit('https://www.google.com')

    cy.get('input[name="q"]')
      .type('Cypress testing{enter}')

    cy.contains('Cypress')
  })
})
