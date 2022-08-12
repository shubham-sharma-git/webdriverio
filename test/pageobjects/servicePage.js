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

}

module.exports = new ServicePage()
