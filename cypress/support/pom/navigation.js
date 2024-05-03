class Navigation {
    getShopLink() {
        return cy.get('button[data-test="menu-bar-item-button"][data-analytics-title="shop"]');
    }

    getShopByAgeLink() {
        return cy.get('button[data-test="navigation-submenu-button"][data-analytics-title="age"]');
    }

    getAgeToShopFor(age) {
        return cy.get('a[data-test="navigation-submenu-grandchildren-link"][data-analytics-title="'+ age + '"]');
    }

    clickShopLink() {
        console.log("Click Shop link");
        this.getShopLink().click();
    }

    clickShopByAgeSubLink() {
        console.log("Click age link");
        this.getShopByAgeLink().click();
    }

    clickAgeToShopForSubLink(age) {
        console.log("Click on " + age + "link to shop for");
        this.getAgeToShopFor(age).click();
    }
}

export default Navigation