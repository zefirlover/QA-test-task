class MainPage {
    get loginButton() {
        return $('/html/body/div[1]/header/div/div[2]/div[2]/div[2]');
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

    get productHover() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]')
    }
    get exploreHover() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]')
    }
    get pricingHover() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]')
    }

    get productDropdown() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details/div')
    }
    get exploreDropdown() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/div');
    }
    get pricingDropdown() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/div');
    }

    get pricingRef() {
        return $('*[href="/pricing"]')
    }
}

module.exports = new MainPage();