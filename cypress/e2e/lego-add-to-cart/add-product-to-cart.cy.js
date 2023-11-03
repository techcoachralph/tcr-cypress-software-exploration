/// <reference types="cypress" />
describe('add product to cart', () => {
    beforeEach(() => {
        cy.visit("https://www.lego.com/")
    })
    it('Add lego product to cart', () => {
        // write some really really cool cypress automation code

        // don't get jealous selenium, you're still my first 🫶

        // click on the continue button to go to lego.com
        cy.get('button[data-test="age-gate-grown-up-cta"]').click()

        // click ok to accept the cookies
        cy.get('button[data-test="cookie-accept-all"]').click()

        // click on shop to open shop menu
        cy.get('button[data-test="menu-bar-item-button"][data-analytics-title=\'shop\']').click()

        // click on age
        cy.get('button[data-test="navigation-submenu-button"][data-analytics-title=\'age\']').click()

        // click on 1.5+
        cy.get('a[data-test="navigation-submenu-grandchildren-link"][data-analytics-title=\'1.5+\']').click()

        // todo we would rather choose a random product instead of the first one
        // click on the first item image
        cy.get('img[data-test="product-image-1"]').first().click()

        // todo handle random feedback iframe if it pops up
        // click add to bag button
        cy.get('button[data-test="add-to-bag"]').click()

        // verify that pop up has text "Added to My Bag"
        cy.get("div[data-test=\"add-to-bag-modal\"] h2")
            .should("have.text", "Added to My Bag")

        // click view my bag
        cy.get('a[data-test="view-my-bag"]').click()

        // verify my bag is loaded with one item in cart
        cy.get('main[id="main-content"] h1')
            .should("have.text", "My Bag(1)")

        // todo verify the name of the item in the cart
        // cy.get('div[data-test="cart-item"] h3[data-test="product-title"] span')

        // click checkout securely
        cy.get("div[class^='Cartstyles__OrderSummaryWrapper'] a[class^='OrderSummarystyles']").click()

        //verify checkout page is loaded
        cy.get("div[class^='LoginReminderstyles__TextWrapper']")
            .first()
            .should("have.text", "New Customer")
    })
})

