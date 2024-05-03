class ShoppingCart {
    getMyBagHeading() {
        return cy.get('main[id="main-content"] h1')
    }

    getCheckoutSecurelyButton() {
        return cy.get("div[class^='Cartstyles__OrderSummaryWrapper'] a[class^='OrderSummarystyles']")
    }

    clickCheckoutSecurelyButton() {
        this.getCheckoutSecurelyButton().click()
    }
}

export default ShoppingCart