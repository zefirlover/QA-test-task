class LoginPage {
    get errorContainer() {
        return $('.flash-error');
    }
    get confirmButton() {
        return $('*[value="Sign in"]')
    }
    get forgotPasswordRef() {
        return $('*[href="/password_reset"]')
    }
}

module.exports = new LoginPage();