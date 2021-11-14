const loginPage = require("../pages/LoginPage")
const accountPage = require("../pages/AccountPage")
var formData = require("../resources/loginForm.json")

describe('TC_001 - Valid Login Test', () => {

    it('TC_001 - Valid Login Test', () => {
        loginPage.enterEmail(formData.email)
        loginPage.clickIdentifierNextButton()
        loginPage.enterPassword(formData.password)
        loginPage.clickPasswordNextButton()
        accountPage.getHeader().should.equal("Welcome, Mark Sydney")
        accountPage.clickAccountButton()
        accountPage.clickSignOut()
        accountPage.getAccountSignInValidation().should.equal("Mark Sydney")   
    });

});

