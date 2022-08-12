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



    async Login(userEmail, password) {
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

