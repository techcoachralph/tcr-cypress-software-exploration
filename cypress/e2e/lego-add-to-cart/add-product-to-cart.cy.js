/// <reference types="cypress" />
import Homepage from '../../support/pom/homepage';
import Navigation from '../../support/pom/navigation';
import ProductListing from "../../support/pom/productListing";
import ProductPage from "../../support/pom/productPage";
import ShoppingCart from "../../support/pom/shoppingCart";
import CheckoutLandingPage from "../../support/pom/checkoutLandingPage";

describe('add product to cart', () => {
    beforeEach(() => {
        cy.visit("https://www.lego.com/")
    })
    it('Add lego product to cart', () => {
        // instantiating page objects
        const home = new Homepage();
        const nav = new Navigation();
        const productListing = new ProductListing()
        const productPage = new ProductPage()
        const shoppingCart = new ShoppingCart()
        const checkoutLandingPage = new CheckoutLandingPage()
        // write some really really cool cypress automation code

        // don't get jealous selenium, you're still my first 🫶
        cy.wait(10000)
        home.clickContinueButtonToGoToLegoMainSite()
        home.clickAcceptCookiesButton()
        nav.clickShopLink()
        nav.clickShopByAgeSubLink()
        nav.clickAgeToShopForSubLink("1.5+")

        // todo we would rather choose a random product instead of the first one
        productListing.clickRandomProductImage()

        // todo handle random feedback iframe if it pops up
        productPage.clickAddToCart()

        productPage.getAddedToBagConfirmationModal()
            .should("have.text", "Added to My Bag")

        productPage.getViewMyBagButtonLink().should("have.text", "View My Bag")
        productPage.clickViewMyBagButton()

        shoppingCart.getMyBagHeading()
            .should("have.text", "My Bag (1)")

        // todo verify the name of the item in the cart
        // todo cy.get('div[data-test="cart-item"] h3[data-test="product-title"] span')

        shoppingCart.clickCheckoutSecurelyButton()
        checkoutLandingPage.getNewCustomerHeader()
            .should("have.text", "New Customer")
    })
})

