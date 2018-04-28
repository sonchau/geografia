describe('The Data Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
      cy.title().should('include', 'Coding Test React App')
      cy.get('.header__message').should('contain', 'Welcome')
      cy.get('button:first').should('contain', 'Year 2011')
      cy.get('button:last').should('contain', 'Year 2016')
      cy.get('canvas').should('have.length', 1)
    })

})
