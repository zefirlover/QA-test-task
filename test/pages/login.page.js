class LoginPage {
    get usernameInput() {
        return $('#login_field');
    }
    get errorContainer() {
        return $('.flash-error');
    }
    get confirmButton() {
        return $('*[value="Sign in"]')
    }
}

module.exports = new LoginPage();