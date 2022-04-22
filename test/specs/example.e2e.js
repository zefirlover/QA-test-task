describe('My test application', () => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max); // to create pseudorandom screenshot name
    }

    it('first task', async () => {
        await browser.url(`https://webdriver.io/`);
        const blogButton = await $('[href="/docs/api"]');
        await blogButton.click();
        console.log("current url: ", await browser.getUrl());
        
        await browser.pause(2000);

        const getH1 = await $('header').$('h1');
        console.log("h1 text: ", await getH1.getText());

        const getRef = await $('a=JSONWire protocol');
        console.log("JSONWire ref: ", await getRef.getAttribute('href'));

        const getSearch = await $('[aria-label="Search"]');
        await getSearch.click();
        const getInput = await $('[id="docsearch-input"]');
        await getInput.addValue('test is ');
        await getInput.addValue('DONE');
        console.log("input text: ", await getInput.getValue());

        await browser.pause(5000);
    });
    it('second task', async () => {
        await browser.url(`https://webdriver.io/docs/api.html`);
        const getRef = await $('a=JSONWire protocol');
        await browser.newWindow(await getRef.getAttribute('href'));

        const strongRef = await $('strong a[href="/SeleniumHQ/selenium/wiki"]');
        console.log("strong ref is visible: ", await strongRef.isDisplayed());
        // there is no a[href="/SeleniumHQ/selenium/wiki"] in the page rn, so the statement is always false

        browser.switchWindow('Introduction | WebdriverIO');

        await browser.waitUntil(
            async () => (await $('header').$('h1').getText()) === 'Introduction',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
        await $('header').$('h1').saveScreenshot('screenshots/screenshot'+getRandomInt(15000)+'.png');

        const twiRef = await $('a[href="https://twitter.com/webdriverio"]');
        console.log("twi ref is visible: ", await twiRef.isDisplayed());
        console.log("twi ref is visible in viewport: ", await twiRef.isDisplayedInViewport());

        await twiRef.scrollIntoView();
        console.log("scrolled");
        
        console.log("twi ref is visible: ", await twiRef.isDisplayed());
        console.log("twi ref is visible in viewport: ", await twiRef.isDisplayedInViewport());

        const blogButton = await $('[href="/blog"]');
        console.log("blog button is focused: ", await blogButton.isFocused());
        await blogButton.click();
        console.log("blog button is focused: ", await blogButton.isFocused());
    });
    it('using css and xpath locators', async () => {
        await browser.url(`https://webdriver.io/docs/api.html`);

        const navEl = await $('.navbar__items').$$('[class="navbar__item navbar__link"]');
        console.log("navbar elements:");
        for (const el of navEl) {
            console.log(await el.getText())
        }

        console.log("leftMenu 1 element: ", await $('//*/div/aside/div/nav/ul/li[1]/a').getText());
        console.log("leftMenu 2 element: ", await $('//*/div/aside/div/nav/ul/li[2]/a').getText());
        console.log("leftMenu 3 element: ", await $('//*/div/aside/div/nav/ul/li[3]/div/a').getText());
        const sideList = await $$('.menu__link');
        console.log("leftMenu 3 elements:");
        for (const el of sideList) {
            console.log(await el.getText());
        }

        console.log("contribute element: ", await $('//*/div/main/div/div/div[2]/div/ul/li[2]/a').getText());

        const textRef = await $('//*/div/main/div/div/div[1]/div/article/div[2]/div[1]/div[2]/p/a').getText();
        console.log('text ref: ', textRef);

        const paragraph = await $('//*/div/main/div/div/div[1]/div/article/div[2]/p[2]').getText();

        console.log('paragraph: ', await paragraph);
    });
    it('using only xpath locators', async () => {
        await browser.url(`https://webdriver.io/docs/api.html`);

        const footerCols = await $(`//div[@class="footer__title"] | div[@class="footer__items"]`); // using or
        await footerCols.scrollIntoView();

        await browser.pause(5000);

        const footerLinks = await $$(`//div[@class="footer__links" and @class="row"]`); // using and
        console.log(await footerLinks)

        const footerTitles = await $$(`//*[contains(@class, "footer__title")]`); // using contains
        for (const el of footerTitles) {
            console.log(await el.getText())
        }
    });
    it('using only xpath locators', async () => {
        await browser.url(`https://github.com/`);

        const navEl = await $('a[href="#home-automate"]');
        await navEl.scrollIntoView();
        await navEl.click();

        const header = await $('//*[@id="home-automate"]/div/div[1]/div[1]/h2');
        await expect(header).toBeDisplayedInViewport();
    });
});
