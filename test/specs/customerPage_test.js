const LoginPage = require("../pageobjects/loginPage")
const CustomerPAGE = require("../pageobjects/customerPage")

describe("Customer Page tese cases", async () => {
    it("Create new customer", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await CustomerPAGE.AddCustomer("bond", "bond@gmail.com")
        await browser.waitUntil(async () => { return (await $("#voice-box")).getText() === "Created customer successfully" }, 20000, "customer created message not displayed")
        // await CustomerPAGE.customerSearch.setValue("testing12")
        // let customers = await CustomerPage.allCustomers()
        // await expect(customers).toBeElementsArrayOfSize({ eq: 1 })
        // await expect(customers[0]).toHaveTextContaining("testing12")

    })
})