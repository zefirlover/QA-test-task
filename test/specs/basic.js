const loginPage = require("../pages/login.page.js");
const loginedPage = require("../pages/logined.page.js");
const mainPage = require("../pages/main.page.js");
const pricingPage = require("../pages/pricing.page.js");
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
});

describe('login test', () => {
    xit('login testing with invalid login', async () => {
        await browser.url(`https://github.com/`);
        await mainPage.loginButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue('zefirlover@gmail.com'); // wrong login

        await signupPage.passwordInput.addValue('HuskTheBest75_');
        await expect(loginPage.confirmButton).toBeDisplayed();
        await loginPage.confirmButton.click();
        await expect(loginPage.errorContainer).toBeDisplayed();
    });
    xit('login testing with invalid password', async () => {
        await browser.url(`https://github.com/`);
        await mainPage.loginButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue('zefirlover.testing@gmail.com');

        await signupPage.passwordInput.addValue('HuskTheBest75'); // wrong password
        await expect(loginPage.confirmButton).toBeDisplayed();
        await loginPage.confirmButton.click();
        await expect(loginPage.errorContainer).toBeDisplayed();
    });
    xit('password input clearing feature testing', async () => {
        //when you enter the wrong credentials, the webpage automatically delete the value in the password input
        await browser.url(`https://github.com/`);
        await mainPage.loginButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue('zefirlover.testing@gmail.com');

        await signupPage.passwordInput.addValue('HuskTheBest75'); // wrong password
        await expect(loginPage.confirmButton).toBeDisplayed();
        await loginPage.confirmButton.click();
        await expect(loginPage.errorContainer).toBeDisplayed();

        await signupPage.passwordInput.addValue('HuskTheBest75_');
        await expect(signupPage.passwordInput).toHaveValue('HuskTheBest75_');
    });
    xit('login testing with valid data', async () => {
        await browser.url(`https://github.com/`);
        await mainPage.loginButton.click();

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue('zefirlover.testing@gmail.com');

        await signupPage.passwordInput.addValue('HuskTheBest75_');
        // correct one, with kind of input field emptiness checking
        
        await expect(loginPage.confirmButton).toBeDisplayed();
        await loginPage.confirmButton.click();

        await expect(loginedPage.pullRequestsRef).toBeDisplayed();

        // exititng from account to be able to run all specs without troubles
        await loginedPage.userPanelButton.click();
        await expect(loginedPage.userPanelDropdown).toBeDisplayed();
        await loginedPage.signoutButton.click();
    });
});

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
        await signupPage.loginInput.setValue(generateLogin());

        await signupPage.emailInput.click();
        await signupPage.emailInput.setValue('username' + getRandomInt() + '@gmail.com');

        await signupPage.passwordInput.click();
        await signupPage.passwordInput.setValue(generatePassword());
    })
})