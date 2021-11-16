class LoginPage {

    enterEmail(email) {
        $('#identifierId').setValue(email)
    }

    clickIdentifierNextButton() {
        $('#identifierNext > div > button').click()
    }

    enterPassword(password) {
        $('#password > div > div > div > input').setValue(password)
    }

    clickPasswordNextButton() {
        $('#passwordNext > div > button').click()
    }

    getEmailValidationMessage() {
        var validation = 
        // $('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[2]/div[2]/div').getText()
        $('div.dEOOab.RxsGPe > div').getText()
        return validation
    }

    getPasswordValidationMessage() {
        var validation = 
        // $('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[2]/div[2]/span').getText()
        $('div.OyEIQ.uSvLId > div:nth-child(2) > span').getText()
        return validation
    }

    clickCreateAccount() {
        $('div.daaWTb > div > div > div:nth-child(1) > div > button').click()
    }

    clickFormyself() {
        $('div.daaWTb > div > div > div:nth-child(2) > div > ul > li:nth-child(2)').click()
    }

    clickForgotEmail() {
        $('div.WEQkZc > div > form > span > section > div > div > div:nth-child(3) > button').click()
    }

    clickLearnMore() {
        $('div.PrDSKc > a').click()
    }

    getHeadingText() {
        browser.pause(1000);
        var headingText = $('#headingText > span').getText()
        return headingText
    }

    getAccountSignInValidation() {
        var validation = $('div.w1I7fb').getText()
        return validation
    }

}
module.exports = new LoginPage()