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


    async AddCustomer(name, email) {

        await this.addNewCustomer.click()
        await this.name.setValue(name)
        await this.email.setValue(email)
        await this.addCustomerBtn.click()

    }
}


module.exports = new CustomerPage()