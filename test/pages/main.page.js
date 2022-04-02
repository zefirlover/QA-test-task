class MainPage {
    get loginButton() {
        return $('/html/body/div[1]/header/div/div[2]/div[2]/div[2]/a');
    };
    get registerButton() {
        return $('/html/body/div[1]/header/div/div[2]/div[2]/a');
    }
    get downRegisterButton() {
        return $('/html/body/div[4]/main/div[2]/div[5]/div[4]/div/div/div[1]/a[1]')
    }
    get contributionHeader() {
        return $('/html/body/div[4]/main/div[2]/div[5]/div[4]/div/div/div[1]/h2')
    }
}

module.exports = new MainPage();