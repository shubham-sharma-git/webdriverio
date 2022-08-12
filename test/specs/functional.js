// const chaiexpect = require("chai").expect

// describe("Function testing", async () => {

//     xit("Scrolling and mouse hover", async () => {

//         await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
//         await browser.pause(3000)
//         await $("#mousehover").scrollIntoView()
//         await browser.pause(3000)
//         await $("#mousehover").moveTo()
//         await browser.pause(5000)
//         await $("=Top").click()
//         await browser.pause(2000)




//     })

//     xit("Java Alert Practice!", async () => {

//         await browser.url("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver")
//         await $("#double-click").doubleClick()
//         await browser.pause(3000)
//         await browser.acceptAlert()
//         await browser.pause(2000)


//     })

//     xit("List Sort", async () => {
//         await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
//         await $("//tr/th[1]").click()
//         await browser.pause(2000)
//         let list = await $$("//tbody/tr/td[1]")
//         let list2 = list.map(async a => a.getText())
//         console.log(list2)
//         let list3 = list2.sort()
//         await chaiexpect(list2).to.eql(list3)




//     })

//     xit("filter function", async () => {
//         await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
//         await $("#search-field").setValue("tomato")
//         let list = await $$("//tbody/tr/td[1]")
//         expect(list).toBeElementsArrayOfSize({ eq: 1 })
//         // list[0].getText()
//         expect(list[0]).toHaveTextContaining("Tomato")




//     })




// }
// )