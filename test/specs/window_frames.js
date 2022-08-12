// describe("Wondows and frames", async () => {

//     xit("Parent and child window switch", async () => {
//         await browser.url("https://www.hyrtutorials.com/p/window-handles-practice.html")
//         await $("#newTabBtn").click()
//         let win = await browser.getWindowHandles()
//         await browser.switchToWindow(win[1])
//         await $("#alertBox").click()
//         await browser.pause(2000)
//         let msg = await browser.getAlertText()
//         console.log(msg)
//         await browser.acceptAlert()
//         await browser.pause(2000)
//         await browser.switchToWindow(win[0])
//         let txt = await $("h1").getText()
//         console.log(txt)
//         console.log(await browser.getTitle())




//     })






// })