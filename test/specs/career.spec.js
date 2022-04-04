const careersPage = require("../pages/careers.page.js");
const mainPage = require("../pages/main.page.js");

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