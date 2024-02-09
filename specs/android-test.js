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
    await new Promise(resolve => setTimeout(resolve, 15000));
  });
});
