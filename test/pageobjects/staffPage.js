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

    get staffList() {
        return $$(".staffnamelist")
    }

    get sideBar() {
        return $("#resource-list")
    }

    get deleteBtnStaff() {
        return $("#btn-for-staffdelete")
    }

    get confirmDeleteStaff() {
        return $("#delete-confirmation-btn")
    }

    async AddStaff(name, email) {
        await this.settingBtn.click()
        await this.addNewStaffBtn.click()
        await this.staffName.setValue(name)
        await this.staffEmail.setValue(email)
        await this.addStaffBtn.click()
    }


    async DeleteStaff(staff_name) {
        await this.settingBtn.click()
        await browser.waitUntil(async () => { await this.sideBar.isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: "Staff List not Displayed"
        })
        let staffs = await this.staffList
        for (let i = 0; i < await staffs.length; i++) {
            if (await staffs[i].getText() === staff_name) {
                await staffs[i].click()
                await this.deleteBtnStaff.click()
                await this.confirmDeleteStaff.click()
            }

        }
    }


}

module.exports = new StaffPage()