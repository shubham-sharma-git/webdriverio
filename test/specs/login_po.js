const LoginPage = require("../pageobjects/loginPage")
const CustomerPage = require("../pageobjects/customerPage")

const fs = require("fs")
const { assert } = require("console")
let credetials = JSON.parse(fs.readFileSync("test/testData/loginTest.json"))

describe("Login Page Test Cases", async () => {


    credetials.forEach(({ username, password }) => {

        it("setmore login and validating the title of the page", async () => {
            await browser.url("")
            await LoginPage.Login(username, password)
            expect(browser).toHaveTitle("Setmore Calendar")
            await LoginPage.Logout()

        })

    });

    it("Setmore login and validating user id", async function () {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await LoginPage.userAccountLink.click()
        await expect(LoginPage.accountUserName).toHaveText("shubham.sharma80048@gmail.com")
        await LoginPage.logoutBtn.click()
    })

    it("login and then logout", async function () {
        // this.retries(2)
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await LoginPage.Logout()
    })
})