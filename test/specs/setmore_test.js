describe("login and adding a new customer", async () => {

    it("login", async () => {
        await browser.url("https://my.setmore.com")
        await $("#username").setValue("shubham.prakash@anywhere.co")
        await $("#password").setValue("a12345678")
        await $("#sm-login-btn").click()
        await $("#side-nav-customers").click()
        await browser.pause(2000)
        let checkboxes = await $$(".jqTransformCheckbox")
        // console.log(checkboxes)
        // await checkboxes[0].click()
        await checkboxes[49].scrollIntoView()
        await browser.pause(2000)
        let checkboxes1 = await $$(".jqTransformCheckbox")
        await checkboxes1[99].scrollIntoView()
        await browser.pause(2000)
        let checkboxes2 = await $$(".jqTransformCheckbox")
        await checkboxes2[149].scrollIntoView()
        await browser.pause(2000)


        let checkboxes3 = await $$(".jqTransformCheckbox")

        for (i = 0; i < checkboxes3.length; i++) {
            checkboxes3[i].click()
        }
        await browser.pause(2000)
        await $("#deleteAllCustomer").click()
        await browser.pause(6000)

    })

    it("creating a new staff in setmore", async () => {
        await browser.url("https://my.setmore.com")
        await $("#username").setValue("shubham.sharma80048@gmail.com")
        await $("#password").setValue("a12345678")
        await $("#sm-login-btn").click()
        await (await $(".settings-icon")).waitForDisplayed()

        await $(".settings-icon").click()
        // await $("#newPlusIcon").click()
        // await $("#staffNewName").setValue("automation")
        // await $("#addstaff").click()

        await browser.pause(3000)

        for (i = 0; i < 10; i++) {

            await $("#newPlusIcon").click()
            await $("#staffNewName").setValue(i)
            await $("#addstaff").click()
            await browser.pause(2000)

        }
    })




})