const StaffPage = require("../pageobjects/staffPage")

const LoginPage = require("../pageobjects/loginPage")

const fs = require("fs")
let staffdata = JSON.parse(fs.readFileSync("test/testData/staffData.json"))
describe("setmore staff tab testing", async () => {

    staffdata.forEach(({ name, email }) => {


        it("adding new staff", async () => {
            await browser.url("")
            await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
            await StaffPage.AddStaff(name, email)
            await LoginPage.Logout()


        })
        xit("Deleting staff", async () => {
            await browser.url("")
            await LoginPage.Login("shubham.sharma80048@gmail.com", "a12345678")
            await StaffPage.DeleteStaff("new")
            await LoginPage.Logout()

        })
    });





})