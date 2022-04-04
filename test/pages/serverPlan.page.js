class ServerPlanPage {
    get nameInput() {
        return $('#contact_request_name');
    };
    get companyInput() {
        return $('#contact_request_organization_name');
    };
    get phoneInput() {
        return $('#contact_request_phone');
    };

    get installationTypeChoice() {
        return $('#contact_request_instance_type_azure');
    };
    get termsChoice() {
        return $('#contact_request_agreed_to_terms');
    };
    get questionChoice() {
        return $('#questions_yes');
    };
    get questionTextarea() {
        return $('#questions-list');
    };
}

module.exports = new ServerPlanPage();