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
        return $("#customerList li")
    }

    async AddCustomer(name, email) {

        // await this.addNewCustomer.waitForDisplayed({ reverse: false, timeout: 30000 });


        await this.addNewCustomer.click()
        await $("#addnewCustomerPopup").waitForDisplayed(5000)
        await this.name.setValue(name)
        await this.email.setValue(email)
        await this.addCustomerBtn.click()

    }
}


module.exports = new CustomerPage()