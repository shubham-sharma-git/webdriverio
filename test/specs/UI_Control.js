describe("UIcontrols", async () => {
    xit("radiobuttons", async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $$(".radioButton")[1].click()
        await browser.pause(3000)
        await (await $("option[value='option1']")).click()
        await browser.pause(3000)

    })

    xit("dropdowns", async () => {
        await browser.url("https://chercher.tech/practice/practice-dropdowns-selenium-webdriver")
        let dropdown = await $("select#first")
        await dropdown.selectByVisibleText("Iphone")
        await browser.pause(3000)

    })

    xit("dynamic dropdowns", async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        let items = await $$(".ui-menu-item-wrapper");
        await browser.pause(3000)

        // await items[1].click()
        for (let i = 0; i < await items.length; i++) {
            if (await items[i].getText() === "India") {
                await items[i].click()
            }
        }

        await browser.pause(2000)


    })

    xit("dynamic dropdowns", async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        let checkboxes = $$("input[type='checkbox']")
        await checkboxes[1].click()
        console.log(await checkboxes[1].isSelected())
        console.log(await checkboxes[2].isSelected())
        await browser.saveScreenshot("screenshot.png")

    })

    xit("Scrolling and mouse hover", async () => {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.pause(3000)
        await $("#mousehover").scrollIntoView()
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(5000)





    })



}
)