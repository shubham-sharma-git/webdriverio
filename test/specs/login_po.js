const LoginPage = require("../pageobjects/loginPage")
const CustomerPage = require("../pageobjects/customerPage")

const fs = require("fs")
let credetials = JSON.parse(fs.readFileSync("test/testData/loginTest.json"))

describe("login on setmore using page object method- smoke", async () => {



    credetials.forEach(({ username, password }) => {


        xit("setmore login and creating customer", async () => {
            await browser.url("")

            // login 
            await LoginPage.Login(username, password)
            await CustomerPage.customerPageLink.click()
            await browser.pause(2000)

            // adding new customer

            // await CustomerPage.AddCustomer("Automation", "automation2@gmail.com")
            await browser.pause(3000)

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