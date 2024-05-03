class ProductListing {
    getProductImage() {
        return cy.get('img[data-test="product-image-1"]');
    }

    clickProductImage() {
        console.log("Click Product Image")
        this.getProductImage().first().click()
    }

    clickRandomProductImage() {
        this.getProductImage().its('length').then(elementCount => {
            let positionOfProductToClick = Cypress._.random(elementCount -1);
            this.getProductImage().eq(positionOfProductToClick).click()
        })
    }
}

export default ProductListing