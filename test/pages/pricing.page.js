class PricingPage {
    get joinButton() {
        return $('/html/body/div[4]/main/div[2]/div[2]/div[1]/div[1]/div/div/div/div[4]/a');
    }
}

module.exports = new PricingPage();