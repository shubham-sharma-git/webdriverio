class ServicePage {

    get settingButton() {
        return $(".settings-icon")
    }

    get serviceTab() {
        return $("//*[@id='settingsSideNav']/ul/li[3]/a")
    }

    get addServiceButton() {
        return $("#addNewService")
    }

    get serviceName() {
        return $("#service_ServiceName")
    }

    get serviceDuration() {
        return $("#service_Duration")
    }

    get allStaffToggle() {
        return $(".checkBox")
    }

    get privateToggle() {
        return $("//*[@id='serviceDetails']/ul[1]/li[2]/ul/li[5]/div/div/span[1]")
    }

    get videoMeetToggle() {
        return $("(//span[@class='slider_off sliders'])[2]")
    }

    get saveServieButton() {
        return $("#saveNewService")
    }

    get allServicesList() {
        return $$(".service-header")
    }

    get deleteServieButton() {
        return $("//button[@class='pull-right btn new-serive-dele-btn']")
    }

    get finalDeleteButton() {
        return $("#delete-confirmation-btn")
    }

    async AddService(service_name, service_duration) {
        await this.settingButton.click()
        await this.serviceTab.click()
        await this.addServiceButton.click()
        await this.serviceName.setValue(service_name)
        await this.serviceDuration.setValue(service_duration)
        await this.allStaffToggle.click()
        await this.allStaffToggle.waitForEnabled()
        await this.saveServieButton.click()
    }

    async AddPrivateService(p_service_name, p_service_duration) {
        await this.settingButton.click()
        await this.serviceTab.click()
        await this.addServiceButton.click()
        await this.serviceName.setValue(p_service_name)
        await this.serviceDuration.setValue(p_service_duration)
        await this.privateToggle.click()
        await this.privateToggle.waitForEnabled()
        await this.allStaffToggle.click()
        await this.allStaffToggle.waitForEnabled()
        await this.saveServieButton.click()
    }

    async DeleteService(name) {
        await this.settingButton.click()
        await this.serviceTab.click()
        for (i = 0; i < this.allServicesList.length; i++) {
            if (await this.allServicesList[i].getText() === name) {
                await this.allServicesList[i].click()
            }

            await this.deleteServieButton.click()
            await this.finalDeleteButton.click()
            await browser.waitUntil(() => { await $("#voice-box").getText() === "Service deleted." }, 5000)

        }
    }

}

module.exports = new ServicePage()
