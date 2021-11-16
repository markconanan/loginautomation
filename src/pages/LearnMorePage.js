class LearnMorePage {

    getHeader() {
        $('div.main-content > article > section > h1').waitForDisplayed({ timeout: 30000 });
        var header = $('div.main-content > article > section > h1').getText()
        return header
    }

}
module.exports = new LearnMorePage()