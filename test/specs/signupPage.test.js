const SignupPage = require("../pageobjects/signup_Page")
const LoginPage = require("../pageobjects/loginPage")

describe("setmore signup", async () => {

    it("signup", async () => {
        await browser.url("start-now")
        await LoginPage.signuplink.click()
        await SignupPage.Signup("testing", "testing34@gmail.com", "a12345678")
        await $("#pricing-free-button").waitForDisplayed()
    })
})