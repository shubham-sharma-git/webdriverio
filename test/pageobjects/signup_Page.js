class SignupPage {

    get name() {
        return $("#input-name")
    }

    get email() {
        return $("#input-email")
    }

    get password() {
        return $("#input-password")
    }

    get signupButton() {
        return $("//button[@type='submit']")
    }

    async Signup(name, email, pass) {

        await this.name.setValue(name)
        await this.email.setValue(email)
        await this.password.setValue(pass)
        await this.signupButton.waitForClickable()
        await this.signupButton.click()

    }
}

module.exports = new SignupPage()