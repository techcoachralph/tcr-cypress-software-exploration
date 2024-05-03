class CheckoutLandingPage {
    getNewCustomerHeader() {
        return cy.get("div[class^='LoginReminderstyles__TextWrapper']").first()
    }
}

export default CheckoutLandingPage