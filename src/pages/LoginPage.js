//contains functions and locators for Login Page

class LoginPage {

    //setters
    enterEmail(email) {
        $('#identifierId').setValue(email)
    }

    enterPassword(password) {
        $('#password > div > div > div > input').setValue(password)
    }

    //next buttons
    clickIdentifierNextButton() {
        $('#identifierNext > div > button').click()
    }

    clickPasswordNextButton() {
        $('#passwordNext > div > button').click()
    }

    //error message for email entries
    getEmailValidationMessage() {
        var validation = 
        $('div.dEOOab.RxsGPe > div').getText()
        return validation
    }

    //error message for password entries
    getPasswordValidationMessage() {
        var validation = 
        $('div.OyEIQ.uSvLId > div:nth-child(2) > span').getText()
        return validation
    }

    //header
    getHeadingText() {
        browser.pause(1000);
        var headingText = $('#headingText > span').getText()
        return headingText
    }

    //Text for signin option for when there's a previous login
    getAccountSignInValidation() {
        var validation = $('div.w1I7fb').getText()
        return validation
    }

    //links
    clickCreateAccount() {
        $('div.daaWTb > div > div > div:nth-child(1) > div > button').click()
    }

    clickForMyself() {
        $('div.daaWTb > div > div > div:nth-child(2) > div > ul > li:nth-child(2)').click()
    }

    clickForgotEmail() {
        $('div.WEQkZc > div > form > span > section > div > div > div:nth-child(3) > button').click()
    }

    clickLearnMore() {
        $('div.PrDSKc > a').click()
    }

}
module.exports = new LoginPage()