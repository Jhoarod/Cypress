describe('Login y validación de inventario', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Login exitoso y validación de productos', () => {

    // Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Validar URL
    cy.url().should('include', '/inventory')

    // Validar título
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Products')

    // Validar lista de productos
    cy.get('.inventory_item')
      .should('have.length.greaterThan', 0)

    // Agregar producto al carrito
    cy.contains('Add to cart').first().click()

    // Validar carrito
    cy.get('.shopping_cart_badge')
      .should('contain', '1')
  })
})
