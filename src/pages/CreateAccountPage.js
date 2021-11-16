//contains functions and locators for Create Account Page

class CreateAccountPage {

    //header
    getHeadingText() {
        $('#headingText').waitForDisplayed({ timeout: 30000 });
        var headingText = $('#headingText').getText()
        return headingText
    }

}

module.exports = new CreateAccountPage()