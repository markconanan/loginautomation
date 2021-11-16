const learnMorePage = require("../pages/LearnMorePage");
const loginPage = require("../pages/LoginPage")
const createAccountPage = require("../pages/CreateAccountPage")

describe('Link Tests', () => {

    it('TC_003 - Verify Learn More Link', () => {
        loginPage.clickLearnMore()
        learnMorePage.getHeader().should.equals('Browse Chrome as a guest')
    });

    it('TC_004 - Verify Forget Email Link', () => {
        loginPage.clickForgotEmail()
        loginPage.getHeadingText().should.equals('Find your email')
    });

    it('TC_005 - Verify Create Account Link', () => {
        loginPage.clickCreateAccount()
        loginPage.clickFormyself()
        createAccountPage.getHeadingText().should.equals('Create your Google Account')
    });


});

