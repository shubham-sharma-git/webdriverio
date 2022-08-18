const ServicePage = require("../pageobjects/servicePage")
const LoginPage = require("../pageobjects/loginPage")

describe("Setmore services testing", async () => {


    xit("Creating Serice without video meeting", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await ServicePage.AddService("new1", 10)
        await LoginPage.Logout()
    })

    it("Creating private service", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await ServicePage.AddPrivateService("xyz", 20)
        await browser.waitUntil(async () => { await $("#voice-box").getText() === "Service saved." }, 5000)
        await LoginPage.Logout()
    })

    xit("Deleting a service with specific name", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await ServicePage.DeleteService("new")
        await LoginPage.Logout()
    })
})