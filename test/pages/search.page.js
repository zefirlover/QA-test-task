class SearchPage {
    get typeScriptRef() {
        return $('*[href*="TypeScript"]');
    };
    get repoRef() {
        return $('*[href*="webdriverio-typescript"]')
    }
}

module.exports = new SearchPage();