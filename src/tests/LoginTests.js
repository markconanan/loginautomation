const loginPage = require("../pages/LoginPage")
const accountPage = require("../pages/AccountPage")
var formData = require("../resources/loginForm.json")

describe('Login Tests', () => {

    it('TC_001 - Valid Login Test', () => {
        loginPage.enterEmail(formData.email)
        loginPage.clickIdentifierNextButton()
        loginPage.enterPassword(formData.password)
        loginPage.clickPasswordNextButton()
        accountPage.getHeader().should.equal("Welcome, Mark Sydney")
        accountPage.clickAccountButton()
        accountPage.clickSignOut()
        
        loginPage.getAccountSignInValidation().should.equal("Mark Sydney")   
    });

    it('TC_002 - Invalid Login Test', () => {
        loginPage.clickIdentifierNextButton()
        loginPage.getEmailValidationMessage().should.equal("Enter an email or phone number")
        loginPage.enterEmail(formData.invalidEmail)
        loginPage.clickIdentifierNextButton()
        loginPage.getEmailValidationMessage().should.equal("Enter a valid email or phone number")
        loginPage.enterEmail(formData.email)
        loginPage.clickIdentifierNextButton()
        loginPage.clickPasswordNextButton()
        loginPage.getPasswordValidationMessage().should.equal("Enter a password")
        loginPage.enterPassword(formData.invalidPassword)
        loginPage.clickPasswordNextButton()
        loginPage.getPasswordValidationMessage().should.equal('Wrong password. Try again or click ‘Forgot password’ to reset it.')
    });


});

