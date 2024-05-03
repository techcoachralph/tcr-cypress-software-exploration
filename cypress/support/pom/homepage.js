class Homepage {
    constructor() {

    }
    getContinueButtonToLegoMainSite() {
        return cy.get('button[data-test="age-gate-grown-up-cta"]');
    }

    getAcceptCookiesButton() {
        return cy.get('button[data-test="cookie-accept-all"]');
    }

    clickContinueButtonToGoToLegoMainSite() {
        console.log("Click the continue button to go to Lego main website");
        this.getContinueButtonToLegoMainSite().click();
    }

    clickAcceptCookiesButton() {
        console.log("Click Accept Cookies button");
        this.getAcceptCookiesButton().click();
    }
}

export default Homepage