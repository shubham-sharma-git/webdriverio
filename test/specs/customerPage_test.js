const LoginPage = require("../pageobjects/loginPage")
const CustomerPAGE = require("../pageobjects/customerPage")

describe("Customer Page tese cases", async () => {
    it("Create new customer and verifying that the customer is added", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await CustomerPAGE.AddCustomer("bond2", "bond2@gmail.com")
        await $("#voice-box").waitForDisplayed(20000, true)
        await CustomerPAGE.customerSearch.setValue("bond2")
        let customers = await CustomerPAGE.allCustomers
        await expect(customers).toBeElementsArrayOfSize({ eq: 1 })
        await expect(customers[0]).toHaveTextContaining("bond2")

    })

})