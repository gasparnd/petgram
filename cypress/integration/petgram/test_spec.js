describe('Petgram ', () => {
  it('to see if app is working ', () => {
    cy.visit('/')
  })
  it('navigation intro categories ', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('navigation to home with the navbar ', () => {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('to see if user no sign up can access to favs page ', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})