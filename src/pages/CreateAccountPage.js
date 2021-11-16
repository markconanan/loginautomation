class CreateAccountPage {

    getHeadingText() {
        $('#headingText').waitForDisplayed({ timeout: 30000 });
        var headingText = $('#headingText').getText()
        return headingText
    }

}

module.exports = new CreateAccountPage()