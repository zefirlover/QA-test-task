class LoginedPage {
    get pullRequestsRef() {
        return $('/html/body/div[1]/header/div[3]/nav/a[2]')
    }
    get userPanelButton() {
        return $('/html/body/div[1]/header/div[7]/details/summary')
    }
    get userPanelDropdown() {
        return $('/html/body/div[1]/header/div[7]/details/details-menu')
    }
    get signoutButton() {
        return $('/html/body/div[1]/header/div[7]/details/details-menu/form/button')
    }
}

module.exports = new LoginedPage();