//contains functions and locators for Account Page

class AccountPage {

    //header
    getHeadingText() {
        $('header > h1').waitForDisplayed({ timeout: 30000 });
        var header = $('header > h1').getText()
        return header
    }

    //links
    clickAccountButton() {
        $('div.gb_Na.gb_bd.gb_gg.gb_h.gb_uf > div > a').click()
    }

    clickSignOut() {
        $('#gb_71').click()
    }

}

module.exports = new AccountPage()