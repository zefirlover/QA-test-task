const careersPage = require("../pages/careers.page.js");
const enterprisePlanPage = require("../pages/enterprisePlan.page.js");
const explorePage = require("../pages/explore.page.js");
const forgotPasswordPage = require("../pages/forgotPassword.page.js");
const loginPage = require("../pages/login.page.js");
const loginedPage = require("../pages/logined.page.js");
const mainPage = require("../pages/main.page.js");
const pricingPage = require("../pages/pricing.page.js");
const searchPage = require("../pages/search.page.js");
const serverPlanPage = require("../pages/serverPlan.page.js");
const signupPage = require("../pages/signup.page.js");
const topicsPage = require("../pages/topics.page.js");

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
    xit('testing sign up via choosing the pricing plan', async () => {
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
});

describe('forgot password recover test', () => {
    xit('test the "Forgot password?" ref', async () => {
        await browser.url('https://github.com/login');

        await expect(loginPage.forgotPasswordRef).toBeDisplayedInViewport();
        await loginPage.forgotPasswordRef.click();

        await signupPage.emailInput.setValue('username' + getRandomInt() + '@gmail.com');
        await expect(forgotPasswordPage.captcha).toBeDisplayedInViewport();
    })
});

describe('exploring the repository lists pages', () => {
    xit('open the topics tab test', async () => {
        await browser.url('https://github.com');

        await mainPage.exploreHover.click();
        await expect(mainPage.exploreDropdown).toBeDisplayedInViewport(); 
        await mainPage.exploreRef.click();
        
        await expect(browser).toHaveUrlContaining('explore');
        await expect(explorePage.topicsRef).toBeDisplayedInViewport();
        await explorePage.topicsRef.click();

        await expect(browser).toHaveUrlContaining('topics');
        await expect(topicsPage.topicsH1).toBeDisplayedInViewport();
        console.log('topics header text: ', await topicsPage.topicsH1.getText());
    });
    xit('searching the webdriverio repo test', async () => {
        await browser.url('https://github.com');

        await expect(mainPage.searchInput).toBeDisplayedInViewport();
        await mainPage.searchInput.setValue('webdriverio');
        await browser.keys(['Enter']);

        await expect(browser).toHaveUrlContaining('search');

        await expect(searchPage.typeScriptRef).toBeDisplayedInViewport();
        await searchPage.typeScriptRef.click();
        await expect(browser).toHaveUrlContaining('TypeScript');

        await expect(searchPage.repoRef).toBeDisplayedInViewport();
        await searchPage.repoRef.click();
        await expect(browser).toHaveUrlContaining('webdriverio-typescript');
    })
})

describe('choosing the enterprise plan testing', () => {
    xit('choosing the enterprise cloud plan', async () => {
        await browser.url('https://github.com');

        await mainPage.enterpriseButton.scrollIntoView();
        await expect(mainPage.enterpriseButton).toBeDisplayedInViewport();
        await mainPage.enterpriseButton.click();
        await expect(browser).toHaveUrlContaining('organizations/enterprise_plan');

        await expect(enterprisePlanPage.cloudRef).toBeDisplayedInViewport();
        await enterprisePlanPage.cloudRef.click();

        await expect(browser).toHaveUrlContaining('join?plan');

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue(generateLogin());
        await signupPage.emailInput.setValue('username' + getRandomInt() + '@gmail.com');
        await signupPage.passwordInput.setValue(generatePassword());
    });
    xit('choosing the enterprise server plan', async () => {
        // CAUTION! Before starting this test be sure that the previous test will not be skipped
        await browser.back();

        await expect(browser).toHaveUrlContaining('organizations/enterprise_plan');
        await expect(enterprisePlanPage.serverRef).toBeDisplayedInViewport();
        await enterprisePlanPage.serverRef.click();

        await expect(browser).toHaveUrlContaining('pricing-card-enterprise');

        await expect(serverPlanPage.nameInput).toBeFocused();
        await serverPlanPage.nameInput.setValue(generateLogin());
        await serverPlanPage.companyInput.setValue(generateLogin());
        await signupPage.emailInput.setValue('username' + getRandomInt() + '@gmail.com');
        await serverPlanPage.phoneInput.setValue(getRandomInt());

        await serverPlanPage.installationTypeChoice.scrollIntoView();
        await expect(serverPlanPage.installationTypeChoice).toBeDisplayedInViewport();
        await serverPlanPage.installationTypeChoice.click();

        await serverPlanPage.questionChoice.scrollIntoView();
        await expect(serverPlanPage.questionChoice).toBeDisplayedInViewport();
        await serverPlanPage.questionChoice.click();

        await serverPlanPage.questionTextarea.scrollIntoView();
        await expect(serverPlanPage.questionTextarea).toBeDisplayedInViewport();
        await serverPlanPage.questionTextarea.setValue(generateLogin() + generateLogin());

        await serverPlanPage.termsChoice.scrollIntoView();
        await expect(serverPlanPage.termsChoice).toBeDisplayedInViewport();
        await serverPlanPage.termsChoice.click();
    });
});

describe('testing the career page output', () => {
    it('testing open positions output on the career page', async () => {
        await browser.url('https://github.com');

        await mainPage.careerRef.scrollIntoView();
        await expect(mainPage.careerRef).toBeDisplayedInViewport();
        await mainPage.careerRef.click();

        await careersPage.positionsListHeader.scrollIntoView();
        await expect(careersPage.positionsListHeader).toBeDisplayedInViewport();

        console.log('open positions list:');
        for (const position of await careersPage.positionsList) {
            console.log(await position.getText());
        };
    });
});