class ForgotPasswordPage {
    get captcha() {
        return $('[style="height: 311px; width: 462px;"]');
    }
}

module.exports = new ForgotPasswordPage();