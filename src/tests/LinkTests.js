const learnMorePage = require("../pages/LearnMorePage");
const loginPage = require("../pages/LoginPage")
const createAccountPage = require("../pages/CreateAccountPage")

//contains tests to verify links on the login page
//tests are written in such a way that each line can be considered a test step or a test validation
describe('Link Tests', () => {

    it('TC_003 - Verify Learn More Link', () => {
        loginPage.clickLearnMore()
        learnMorePage.getHeadingText().should.equals('Browse Chrome as a guest')
    });

    it('TC_004 - Verify Forget Email Link', () => {
        loginPage.clickForgotEmail()
        loginPage.getHeadingText().should.equals('Find your email')
    });

    //test below is setup to fail to show error screenshot functionality of allure report
    it('TC_005 - Verify Create Account Link - Failed Setting', () => {
        loginPage.clickCreateAccount()
        loginPage.clickForMyself()
        //change validation to 'Create your Google Account' to pass
        createAccountPage.getHeadingText().should.equals('Create your Google Accounts')
    });

});

