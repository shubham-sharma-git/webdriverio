const LoginPage = require("../pageobjects/loginPage")
const CustomerPAGE = require("../pageobjects/customerPage")

describe("Customer Page tese cases", async () => {
    xit("Create new customer", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await CustomerPAGE.customerPageLink.click()
        await CustomerPAGE.addNewCustomer.waitForDisplayed(4000)

        await CustomerPAGE.AddCustomer("testing13", "testing13@gmail.com")
        await $("#voice-box").waitForDisplayed(5000)
        await CustomerPAGE.customerSearch.setValue("testing12")
        let customers = await CustomerPage.allCustomers()
        await expect(customers).toBeElementsArrayOfSize({ eq: 1 })
        await expect(customers[0]).toHaveTextContaining("testing12")

    })
})