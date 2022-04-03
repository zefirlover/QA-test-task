class LoginPage {
    get errorContainer() {
        return $('.flash-error');
    }
    get confirmButton() {
        return $('*[value="Sign in"]')
    }
}

module.exports = new LoginPage();