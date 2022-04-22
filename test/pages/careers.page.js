class CareersPage {
    get positionsList() {
        return $$('h3[class="float-left f3-mktg text-normal py-4"]');
    };
    get positionsListHeader() {
        return $('//*[@id="positions"]');
    };
}

module.exports = new CareersPage();