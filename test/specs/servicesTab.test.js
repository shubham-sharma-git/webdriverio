const ServicePage = require("../pageobjects/servicePage")
const LoginPage = require("../pageobjects/loginPage")
const chaiexpect = require("chai").expext


describe("Setmore services testing", async () => {


    xit("Creating Serice without video meeting", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await ServicePage.AddService("new1", 10)
        await LoginPage.Logout()
    })

    xit("Creating private service", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await ServicePage.AddPrivateService("xyz", 20)
        await browser.waitUntil(async () => { await $("#voice-box").getText() === "Service saved." }, 5000)
        await LoginPage.Logout()
    })

    it("Deleting a service with specific name", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await ServicePage.settingButton.click()
        await ServicePage.serviceTab.click()
        await browser.waitUntil(async () => { return await ServicePage.allServices.isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: "Services List not Displayed"
        })
        for (i = 0; i < await ServicePage.allServicesList.length; i++) {
            console.log("the name of first service is: ", await ServicePage.allServicesList[i].getText())
            if (await ServicePage.allServicesList[i].getText() === "zoom service") {
                await ServicePage.allServicesList[i].click()
                await ServicePage.deleteServieButton.click()
                await ServicePage.finalDeleteButton.click()
            }
            await browser.pause(3000)
        }

        await LoginPage.Logout()
    })
})