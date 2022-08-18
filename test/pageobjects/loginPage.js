class LoginPage {

    get email() {
        return $("#username")
    }

    get password() {
        return $("#password")
    }

    get loginButton() {
        return $("//div[@id='setmoreLoginForm']/button[@id='sm-login-btn']")
    }

    get accountButton() {
        return $(".right_nav_holder-loginid")
    }

    get logoutBtn() {
        return $("#sign_out")
    }

    get signuplink() {
        return $("#signup-btn")
    }

    get userAccountLink() {
        return $("#account_menu")
    }

    get accountUserName() {
        return $("(//h3[@class='nav-dropdown-desc-header'])[1]")
    }



    async Login(userEmail, password) {
        await browser.waitUntil(async () => { return await this.email.isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: 'Element not displayed'
        })
        await this.email.setValue(userEmail)
        await this.password.setValue(password)
        await this.loginButton.click()
    }


    async Logout() {
        await this.accountButton.click()
        await this.logoutBtn.click()
    }

}

module.exports = new LoginPage()

