const topicsPage = require("../pages/topics.page.js");
const mainPage = require("../pages/main.page.js");
const searchPage = require("../pages/search.page.js");
const explorePage = require("../pages/explore.page.js");

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