const data = require("../dataGenerators.js");
const mainPage = require("../pages/main.page.js");
const signupPage = require("../pages/signup.page.js");

describe('registration test', () => {
    xit('registration from header', async () => {
        await browser.url(`https://github.com/`);
        await mainPage.registerButton.click();
        await expect(browser).toHaveUrlContaining('signup');

        await browser.waitUntil(
            async () => (await signupPage.emailInput.isDisplayedInViewport()) == true,
            {
                timeout: 5000,
                timeoutMsg: 'email input was not shown'
            }
        );

        await expect(signupPage.emailInput).toBeFocused();
        await signupPage.emailInput.setValue('username' + data.getRandomInt() + '@gmail.com');
        
        await browser.pause(1000);
        await signupPage.emailContiniueButton.click();

        await expect(signupPage.passwordInput).toBeFocused();
        await signupPage.passwordInput.setValue(data.generatePassword());

        await browser.pause(1000);
        await signupPage.passwordContiniueButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue(data.generateLogin());

        await browser.pause(1000);
        await signupPage.usernameContiniueButton.click();

        await expect(signupPage.questionInput).toBeFocused();
        await signupPage.questionInput.setValue('n');

        await browser.pause(1000);
        await signupPage.optContiniueButton.click();

        await expect(signupPage.captchaHeader).toBeDisplayedInViewport();
        await signupPage.captchaHeader.saveScreenshot('screenshots/screenshot' + data.getRandomInt() + '.png')
    });
    xit('registration from down block', async () => {
        await browser.url(`https://github.com/`);
        await mainPage.contributionHeader.scrollIntoView();

        await browser.pause(1000);

        await expect(mainPage.downRegisterButton).toBeDisplayedInViewport();
        await mainPage.downRegisterButton.click();
        await expect(browser).toHaveUrlContaining('signup');

        await browser.waitUntil(
            async () => (await signupPage.emailInput.isDisplayedInViewport()) == true,
            {
                timeout: 5000,
                timeoutMsg: 'email input was not shown'
            }
        );

        await expect(signupPage.emailInput).toBeFocused();
        await signupPage.emailInput.setValue('username' + data.getRandomInt() + '@gmail.com');
        
        await browser.pause(1000);
        await signupPage.emailContiniueButton.click();

        await expect(signupPage.passwordInput).toBeFocused();
        await signupPage.passwordInput.setValue(data.generatePassword());

        await browser.pause(1000);
        await signupPage.passwordContiniueButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue(data.generateLogin());

        await browser.pause(1000);
        await signupPage.usernameContiniueButton.click();

        await expect(signupPage.questionInput).toBeFocused();
        await signupPage.questionInput.setValue('n');

        await browser.pause(1000);
        await signupPage.optContiniueButton.click();

        await expect(signupPage.captchaHeader).toBeDisplayedInViewport();
        await signupPage.captchaHeader.saveScreenshot('screenshots/screenshot' + data.getRandomInt() + '.png')
    });
});