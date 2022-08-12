// describe("WebApp", async () => {


//     xit("Login", async () => {
//         // webdriverio code
//         await browser.url("https://opensource-demo.orangehrmlive.com")
//         console.log(await browser.getTitle())
//         await expect(browser).toHaveTitleContaining("OrangeHRM")
//         await $("#txtUsername").setValue("Admin")
//         await browser.pause(3000)
//         await $("#txtPassword").setValue("admin1234")
//         await $("#btnLogin").click()
//         await browser.pause(3000)
//         console.log(await $("#spanMessage").getText())
//         await expect($("#content > div:nth-child(3) > span")).toHaveText("( Username : Admin | Password : admin1234 )")


//     })

//     xit("LoginSuccess", async () => {
//         await browser.url("https://opensource-demo.orangehrmlive.com")
//         await $("#txtUsername").setValue("Admin")
//         await $("#txtPassword").setValue("admin123")
//         await $("#btnLogin").click()
//         await $("#MP_link").waitForExist()
//         await expect(browser).toHaveUrlContaining("dashboard")
//         await expect(browser).toHaveTitle("OrangeHRM")



//     })







// }

// )