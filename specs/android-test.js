// describe("Proverbial APK", () => {
//   it("Changes color", async () => {
//     // Pause for 15 seconds
//     await new Promise(resolve => setTimeout(resolve, 15000));
//   });

//   it("Clicks on the element", async () => {
//     // Find the element
//     const element = await $('//*[@text="Authenticator"]');
//     await element.waitForDisplayed({ timeout: 30000 });

//     // Pause for 15 seconds
//     await new Promise(resolve => setTimeout(resolve, 15000));

//     // Click on the element
//     await element.click();
//   });

//   it("Puts the app in background", async () => {
//     // Pause for 5 seconds
//     await new Promise(resolve => setTimeout(resolve, 5000));

//     // Put the native application into the background for 30 seconds
//     await browser.background(-1);
//   });

//   it("Sets device orientation back to portrait", async () => {
//     // Set device orientation back to portrait
//     await driver.setOrientation("portrait");

//     // Pause for 15 seconds
//     await new Promise(resolve => setTimeout(resolve, 15000));
//   });

//   it("Launches another app", async () => {
//     // Launch another app
//     await driver.startActivity("com.android.chrome" , "com.google.android.apps.chrome.Main");

//   });
// });

describe("Proverbial APK", () => {
  it("Switches to Chrome and back to the app on the same page", async () => {
    await new Promise(resolve => setTimeout(resolve, 15000));
    const element = await $('//*[@text="Authenticator"]');
    await element.waitForDisplayed({ timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 5000));
    await element.click();
    await new Promise(resolve => setTimeout(resolve, 15000));
    // await driver.pressKeyCode(3);
    await driver.startActivity("com.android.chrome", "com.google.android.apps.chrome.Main");
    await new Promise(resolve => setTimeout(resolve, 15000));
    await driver.activateApp("com.rbinternational.mobrix.mobrixshowcase");
    await driver.setOrientation("portrait");
    // await driver.pressKeyCode(187);
    // const size = await driver.manage().window().getSize();
    // const x = size.width / 2;
    // const y = size.height / 2;
    // let touchAction = new driver.TouchAction(driver);
    // touchAction.tap({ x: x, y: y }).perform();
    await new Promise(resolve => setTimeout(resolve, 15000));
  });
});
