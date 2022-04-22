const data = require("../dataGenerators.js");
const mainPage = require("../pages/main.page.js");
const signupPage = require("../pages/signup.page.js");
const loginPage = require("../pages/login.page.js");
const loginedPage = require("../pages/logined.page.js");
const forgotPasswordPage = require("../pages/forgotPassword.page.js");

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
    xit('test the "Forgot password?" ref', async () => {
        await browser.url('https://github.com/login');

        await expect(loginPage.forgotPasswordRef).toBeDisplayedInViewport();
        await loginPage.forgotPasswordRef.click();

        await signupPage.emailInput.setValue('username' + data.getRandomInt() + '@gmail.com');
        await expect(forgotPasswordPage.captcha).toBeDisplayedInViewport();
    })
});
