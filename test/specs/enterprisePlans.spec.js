const data = require("../dataGenerators.js");
const enterprisePlanPage = require("../pages/enterprisePlan.page.js");
const mainPage = require("../pages/main.page.js");
const serverPlanPage = require("../pages/serverPlan.page.js");
const signupPage = require("../pages/signup.page.js");

describe('choosing the enterprise plan testing', () => {
    it('choosing the enterprise cloud plan', async () => {
        await browser.url('https://github.com');

        await mainPage.enterpriseButton.scrollIntoView();
        await expect(mainPage.enterpriseButton).toBeDisplayedInViewport();
        await mainPage.enterpriseButton.click();
        await expect(browser).toHaveUrlContaining('organizations/enterprise_plan');

        await expect(enterprisePlanPage.cloudRef).toBeDisplayedInViewport();
        await enterprisePlanPage.cloudRef.click();

        await expect(browser).toHaveUrlContaining('join?plan');

        await expect(signupPage.loginInput).toBeFocused();
        await signupPage.loginInput.setValue(data.generateLogin());
        await signupPage.emailInput.setValue('username' + data.getRandomInt() + '@gmail.com');
        await signupPage.passwordInput.setValue(data.generatePassword());
    });
    it('choosing the enterprise server plan', async () => {
        // CAUTION! Before starting this test be sure that the previous test will not be skipped
        await browser.back();

        await expect(browser).toHaveUrlContaining('organizations/enterprise_plan');
        await expect(enterprisePlanPage.serverRef).toBeDisplayedInViewport();
        await enterprisePlanPage.serverRef.click();

        await expect(browser).toHaveUrlContaining('pricing-card-enterprise');

        await expect(serverPlanPage.nameInput).toBeFocused();
        await serverPlanPage.nameInput.setValue(data.generateLogin());
        await serverPlanPage.companyInput.setValue(data.generateLogin());
        await signupPage.emailInput.setValue('username' + data.getRandomInt() + '@gmail.com');
        await serverPlanPage.phoneInput.setValue(data.getRandomInt());

        await serverPlanPage.installationTypeChoice.scrollIntoView();
        await expect(serverPlanPage.installationTypeChoice).toBeDisplayedInViewport();
        await serverPlanPage.installationTypeChoice.click();

        await serverPlanPage.questionChoice.scrollIntoView();
        await expect(serverPlanPage.questionChoice).toBeDisplayedInViewport();
        await serverPlanPage.questionChoice.click();

        await serverPlanPage.questionTextarea.scrollIntoView();
        await expect(serverPlanPage.questionTextarea).toBeDisplayedInViewport();
        await serverPlanPage.questionTextarea.setValue(data.generateLogin() + data.generateLogin());

        await serverPlanPage.termsChoice.scrollIntoView();
        await expect(serverPlanPage.termsChoice).toBeDisplayedInViewport();
        await serverPlanPage.termsChoice.click();
    });
});