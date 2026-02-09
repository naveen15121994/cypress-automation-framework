import LoginPage from '../pages/LoginPage'

describe('Login Test', () => {

  it('should login with valid credentials', () => {

    cy.fixture('users').then((data) => {

      LoginPage.visit()
      LoginPage.enterUsername(data.validUser.username)
      LoginPage.enterPassword(data.validUser.password)
      LoginPage.clickLogin()

      cy.contains('Dashboard').should('be.visible')

    })

  })
  it('Should show error message with invalid credentials', () => {
    LoginPage.visit()
    LoginPage.enterUsername('invalidUser')
    LoginPage.enterPassword('wrongPassword')
    LoginPage.clickLogin()  
    cy.contains('Invalid username or password').should('be.visible')
  })

})