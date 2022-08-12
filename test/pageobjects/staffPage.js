class StaffPage {

    get settingBtn() {
        return $(".settings-icon")
    }

    get addNewStaffBtn() {
        return $("#createNewStaffBtn")
    }

    get staffName() {
        return $("#staffNewName")
    }

    get staffEmail() {
        return $("#staffNewEmail")
    }

    get addStaffBtn() {
        return $("#addstaff")
    }

    async AddStaff(name, email) {
        await this.settingBtn.click()
        await this.addNewStaffBtn.click()
        await this.staffName.setValue(name)
        await this.staffEmail.setValue(email)
        await this.addStaffBtn.click()
    }


}

module.exports = new StaffPage()