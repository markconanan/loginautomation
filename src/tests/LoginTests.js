const loginPage = require("../pages/LoginPage")
const accountPage = require("../pages/AccountPage")
var formData = require("../resources/loginForm.json")

//contains tests to verify links on the login page
//tests are written in such a way that each line can be considered a test step or a test validation
describe('Login Tests', () => {

    //triggers the validation messages and verifies them
    it('TC_001 - Invalid Login Test', () => {
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

    //tests the happy path for a login flow
    it('TC_002 - Valid Login Test', () => {
        loginPage.enterEmail(formData.email)
        loginPage.clickIdentifierNextButton()
        loginPage.enterPassword(formData.password)
        loginPage.clickPasswordNextButton()

        //validates login thru heading text
        accountPage.getHeadingText().should.equal("Welcome, Mark Sydney")
        accountPage.clickAccountButton()
        accountPage.clickSignOut()

        //feature validation: google remembers your sign in after signing out
        loginPage.getAccountSignInValidation().should.equal("Mark Sydney")   
    });

});

