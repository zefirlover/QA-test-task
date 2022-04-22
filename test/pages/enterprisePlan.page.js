class EnterprisePlanPage {
    get cloudRef() {
        return $('*[href*="join?plan=business_plus"]');
    };
    get serverRef() {
        return $('*[href*="pricing-card-enterprise"]')
    }
}

module.exports = new EnterprisePlanPage();