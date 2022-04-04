const data = require("../dataGenerators.js");
const mainPage = require("../pages/main.page.js");
const signupPage = require("../pages/signup.page.js");
const pricingPage = require("../pages/pricing.page.js");

describe('pricing signup test', () => {
    it('testing sign up via choosing the pricing plan', async () => {
        await browser.url(`https://github.com/`); 

        await mainPage.pricingHover.moveTo();
        await mainPage.pricingHover.click();
        await expect(mainPage.pricingDropdown).toBeDisplayedInViewport();

        await mainPage.pricingRef.click();

        await pricingPage.joinButton.scrollIntoView();
        await pricingPage.joinButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue(data.generateLogin());

        await signupPage.emailInput.click();
        await signupPage.emailInput.setValue('username' + data.getRandomInt() + '@gmail.com');

        await signupPage.passwordInput.click();
        await signupPage.passwordInput.setValue(data.generatePassword());
    })
});