describe('Test login form', () => {
    it('Filling login form with email and password, then submitting form', () => {
      cy.visit('https://chlist.sitechco.ru/login')
      cy.get('input[id="user_auth_email"]', {timeout: 3000}).type('secrets-inside@yandex.ru', {timeout: 3000})
      cy.get('input[id="user_auth_password"]', {timeout: 3000}).type('Sept-181987', {timeout: 3000})
      cy.get('input[type="submit"]', {timeout: 3000}).click()
      cy.get('span[title="Выйти"]', {timeout: 3000}).should('be.visible')
      ;
    })
  })