class ProductPage {
    getAddToCartButton() {
        cy.wait(5000)
        return cy.get('button[data-test="add-to-bag"]');
    }

    getAddedToBagConfirmationModal() {
        return cy.get("div[data-test=\"add-to-bag-modal\"] h2")
    }

    getViewMyBagButtonLink() {
        return cy.get('a[data-test="view-my-bag"]')
    }

    clickAddToCart() {
        console.log("Click Add to Cart button")
        this.getAddToCartButton().click()
    }

    clickViewMyBagButton() {
        this.getViewMyBagButtonLink().click()
    }
}

export default ProductPage