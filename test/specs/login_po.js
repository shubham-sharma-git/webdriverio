const LoginPage = require("../pageobjects/loginPage")
const CustomerPage = require("../pageobjects/customerPage")

const fs = require("fs")
const { assert } = require("console")
let credetials = JSON.parse(fs.readFileSync("test/testData/loginTest.json"))

describe("login on setmore using page object method- smoke", async () => {



    credetials.forEach(({ username, password }) => {


        it("setmore login and creating customer", async () => {
            await browser.url("")

            // login 
            await LoginPage.Login(username, password)
            expect(browser).toHaveTitle("Setmore Calendar")
            await LoginPage.userAccountLink.click()
            let AccountName = LoginPage.accountUserName
            await AccountName.waitForDisplayed(3000)
            await expect(AccountName).toHaveText("shubham.sharma80048@gmail.com")


            await $("#addnewCustomerPopup").waitForDisplayed(5000)

            await CustomerPage.customerPageLink.click()
            // await browser.pause(2000)

            // adding new customer

            // await CustomerPage.AddCustomer("Automation11", "automation11@gmail.com")
            // await browser.pause(3000)

            // logout

            await LoginPage.Logout()

        })

    });

    xit("login and then logout - smoke", async function () {
        // this.retries(2)
        await browser.url("")

        // login
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")



        // Logout
        await LoginPage.Logout()
    })
})