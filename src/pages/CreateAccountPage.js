// locators for Create Account, but flow is blocked due to google phone verification for account creation

// class CreateAccountPage {

//     enterFirstName(firstName) {
//         $('#firstName').setValue(firstName)
//     }

//     enterLastName(lastName) {
//         $('#lastName').setValue(lastName)
//     }

//     enterUsername(username) {
//         $('#username').setValue(username)
//     }

//     enterPassword(password) {
//         $('#passwd > div > div > div > input').setValue(password)
//     }

//     enterConfirmPassword(password) {
//         $('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').setValue(password)
//     }

//     enterPhoneNumber(phoneNumber) {
//         $('#phoneNumberId').setValue(phoneNumber)
//     }

//     enterCode(code) {
//         $('#code').setValue(code)
//     }

//     enterBdayMonth(month) {
//         const bdaymonth = $('#month')
//         bdaymonth.selectByVisibleText(month)
//     }

//     enterBdayDay(day) {
//         $('#day').setValue(day)
//     }

//     enterBdayYear(year) {
//         $('#year').setValue(year)
//     }

//     enterGender(gender) {
//         const selectgender = $('#gender')
//         selectgender.selectByVisibleText(gender)
//     }
    

//     getFirstAndLastNameValidation() {
//         var validation = $('#nameError > div:nth-child(2) > span').getText()
//         console.log(validation)
//         return validation
//     }

//     getUsernameValidation() {
//         var validation = $('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[2]/div[1]/div/div[2]/div[2]/div').getText()
//         console.log(validation)
//         return validation
//     }

//     getPasswordValidation() {
//         var validation = $('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[3]/div[2]/div[2]/span').getText()
//         console.log(validation)
//         return validation
//     }

//     getBirthdayValidation() {
//         var validation = $('//*[@id="dateError"]/div').getText()
//         console.log(validation)
//         return validation
//     }

//     clickAccountDetailsNextButton() {
//         $('#accountDetailsNext > div > button').click()
//     }
// }

// module.exports = new CreateAccountPage()