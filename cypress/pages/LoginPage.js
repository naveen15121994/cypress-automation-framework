class LoginPage {
    usernameInput = '#username'
    passwordInput = '#password'
    loginButton = 'button[type="submit"]'

    visit() {
        cy.visit('https://the-internet.herokuapp.com/login')
    }
    enterUsername(username) {
        cy.get(this.usernameInput).type(username)
    }
    enterPassword(password) {
        cy.get(this.passwordInput).type(password)
    }
    clickLogin() {
        cy.get(this.loginButton).click()
    }   
    
}
export default new LoginPage()