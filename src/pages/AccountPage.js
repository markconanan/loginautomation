class AccountPage {

    getHeader() {
        $('header > h1').waitForDisplayed({ timeout: 30000 });
        var header = $('header > h1').getText()
        return header
    }

    clickAccountButton() {
        $('//*[@id="gb"]/div[2]/div[3]/div[1]/div[2]/div/a').click()
    }

    clickSignOut() {
        $('//*[@id="gb"]/div[2]/div[4]/div[4]/a').click()
    }

    getAccountSignInValidation() {
        var validation = $('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[1]/div/div[1]/div/div[2]/div[1]').getText()
        return validation
    }

}

module.exports = new AccountPage()