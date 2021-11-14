const loginPage = require("../pages/LoginPage")
var formData = require("../resources/loginForm.json")

describe('TC_002 - Invalid Login Test', () => {

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

