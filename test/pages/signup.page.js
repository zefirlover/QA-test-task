class SignUpPage {
    get emailInput() {
        return $('#email');
    };
    get emailContiniueButton() {
        return $('//*[@id="email-container"]/div[2]/button');
    };
    get passwordInput() {
        return $('#password');
    };
    get passwordContiniueButton() {
        return $('//*[@id="password-container"]/div[2]/button');
    };
    get loginInput() {
        return $('#login');
    };
    get usernameContiniueButton() {
        return $('//*[@id="username-container"]/div[2]/button');
    }
    get questionInput() {
        return $('#opt_in')
    }
    get optContiniueButton() {
        return $('//*[@id="opt-in-container"]/div[2]/button');
    }
    get captchaHeader() {
        return $('//*[@id="captcha-and-submit-container"]/div[1]')
    }
}

module.exports = new SignUpPage();