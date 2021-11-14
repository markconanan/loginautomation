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
        var validation = $('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[2]/div[2]/div').getText()
        return validation
    }

    getPasswordValidationMessage() {
        var validation = $('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[2]/div[2]/span').getText()
        return validation
    }

    clickCreateAccount() {
        $('#view_container > div > div > div > div > div > div > div > div > div > div:nth-child(1) > div > button').click()
    }

    clickFormyself() {
        $('#view_container > div > div > div > div > div > div > div  > div > div > div:nth-child(2) > div > ul > li:nth-child(2)').click()
    }

    clickForgotEmail() {
        $('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[3]/button').click()
    }

}
module.exports = new LoginPage()