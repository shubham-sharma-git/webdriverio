const ServicePage = require("../pageobjects/servicePage")
const LoginPage = require("../pageobjects/loginPage")

describe("Setmore services testing", async () => {


    xit("Creating Serice without video meeting", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await ServicePage.AddService("auto_service1", 20)
        await LoginPage.Logout()
    })

    xit("Creating private service", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await ServicePage.AddPrivateService("auto_private_service", 20)
        // await browser.pause(5000)
        await LoginPage.Logout()
    })
})