class LoginedPage {
    get pullRequestsRef() {
        return $('/html/body/div[1]/header/div[3]/nav/a[2]')
    }
}

module.exports = new LoginedPage();