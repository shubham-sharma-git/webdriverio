const LoginPage = require("../pageobjects/loginPage")
const CustomerPAGE = require("../pageobjects/customerPage")

describe("Customer Page tese cases", async () => {
    xit("Create new customer and verifying that the customer is added", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await CustomerPAGE.AddCustomer("bond2", "bond2@gmail.com")
        await $("#voice-box").waitForDisplayed(20000, true)
        await CustomerPAGE.customerSearch.setValue("bond2")
        let customers = await CustomerPAGE.allCustomers
        await expect(customers).toBeElementsArrayOfSize({ eq: 1 })
        await expect(customers[0]).toHaveTextContaining("bond2")

    })

    itx("Detele a customer with provided name", async () => {
        await browser.url("")
        await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
        await CustomerPAGE.customerPageLink.click()
        await browser.waitUntil(async () => { return await CustomerPAGE.allContactList.isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: 'Timeout Service page'
        })
        for (i = 0; i < await CustomerPAGE.allCustomers.length; i++) {
            if (await CustomerPAGE.allCustomers[i].getText() === "hacksaw") {
                await CustomerPAGE.allCustomers[i].scrollIntoView()
                await CustomerPAGE.allCustomers[i].click()
                await CustomerPAGE.deleteCustomerBtn.click()
                await CustomerPAGE.deleteConfrmBtn.click()
            }
        }
        await CustomerPAGE.customerSearch.setValue("hacksaw")
        let nocustomer = await $("#noCustomer span")
        await nocustomer.waitForDisplayed(10000)
        await expect(nocustomer).toHaveText("We're sorry, no customer was found.")

    })

})