const mainPage = require("../pages/main.page.js");
const signupPage = require("../pages/signup.page.js");

function getRandomInt() {
    return Math.floor(Math.random() * 50000); // to create pseudorandom screenshot name
}
function generatePassword() {
    var length = 15,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789__________0123456789_________",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
function generateLogin() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

describe('registration test', () => {
    it('registration from header', async () => {
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
        await signupPage.emailInput.setValue('username' + getRandomInt() + '@gmail.com');
        
        await browser.pause(1000);
        await signupPage.emailContiniueButton.click();

        await expect(signupPage.passwordInput).toBeFocused();
        await signupPage.passwordInput.setValue(generatePassword());

        await browser.pause(1000);
        await signupPage.passwordContiniueButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue(generateLogin());

        await browser.pause(1000);
        await signupPage.usernameContiniueButton.click();

        await expect(signupPage.questionInput).toBeFocused();
        await signupPage.questionInput.setValue('n');

        await browser.pause(1000);
        await signupPage.optContiniueButton.click();

        await expect(signupPage.captchaHeader).toBeDisplayedInViewport();
        await signupPage.captchaHeader.saveScreenshot('screenshots/screenshot'+getRandomInt(15000)+'.png')
    });
    it('registration from down block', async () => {
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
        await signupPage.emailInput.setValue('username' + getRandomInt() + '@gmail.com');
        
        await browser.pause(1000);
        await signupPage.emailContiniueButton.click();

        await expect(signupPage.passwordInput).toBeFocused();
        await signupPage.passwordInput.setValue(generatePassword());

        await browser.pause(1000);
        await signupPage.passwordContiniueButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue(generateLogin());

        await browser.pause(1000);
        await signupPage.usernameContiniueButton.click();

        await expect(signupPage.questionInput).toBeFocused();
        await signupPage.questionInput.setValue('n');

        await browser.pause(1000);
        await signupPage.optContiniueButton.click();

        await expect(signupPage.captchaHeader).toBeDisplayedInViewport();
        await signupPage.captchaHeader.saveScreenshot('screenshots/screenshot'+getRandomInt(15000)+'.png')
    });
})