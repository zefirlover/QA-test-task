const mainPage = require("../pages/main.page.js");

describe('hover test', () => {
    xit('test elements displayed while hover the button', async () => {
        await browser.url(`https://github.com/`);
        await mainPage.productHover.click();
        await expect(mainPage.productDropdown).toBeDisplayedInViewport();

        await mainPage.exploreHover.moveTo();
        await mainPage.exploreHover.click();
        await expect(mainPage.exploreDropdown).toBeDisplayedInViewport();

        await mainPage.pricingHover.moveTo();
        await mainPage.pricingHover.click();
        await expect(mainPage.pricingDropdown).toBeDisplayedInViewport();
    });
});