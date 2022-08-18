class CustomerPage {

    get customerPageLink() {
        return $("#side-customers")

    }

    get addNewCustomer() {
        return $("#newCustomer")
    }

    get name() {
        return $("#customerNewName")
    }

    get email() {
        return $("#customerNewEmail")
    }

    get addCustomerBtn() {
        return $("#addnewCustomer")
    }

    get customerSearch() {
        return $("#searchCustomer")
    }

    get allCustomers() {
        return $$("#customerList li")
    }

    get allContactList() {
        return $("#customerList")
    }

    async AddCustomer(name, email) {

        await this.customerPageLink.click()
        await browser.waitUntil(async () => { return await this.allContactList.isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: 'Timeout Service page'
        })
        await this.addNewCustomer.click()
        await this.name.setValue(name)
        await this.email.setValue(email)
        await this.addCustomerBtn.click()


    }
}

module.exports = new CustomerPage()