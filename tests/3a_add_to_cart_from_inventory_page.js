import { expect } from 'chai';
import { validCredentials } from '../data/credentials';
import { productName } from '../data/common';
import HomePage from '../objects/pages/home_page';
import InventoryPage from '../objects/pages/inventory_page';
import CartPage from '../objects/pages/cart_page';

const homePage = new HomePage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

describe('3a. Log in to the app. Add any product to the cart (from inventory page) and check if it is displayed on the cart page', () => {
    it('Log in to the app', () => {
        homePage.open();

        homePage.username = validCredentials.username;
        homePage.password = validCredentials.password;
        homePage.login();
        expect(browser.getUrl()).to.equals(InventoryPage.url);
    });

    it('Add any product to the cart', () => {
        inventoryPage.addToCart();
        expect(inventoryPage.cartItemsCount).to.equals('1');
    });

    it('Go to the cart page', () => {
        inventoryPage.clickCart();
        expect(browser.getUrl()).to.equals(CartPage.url);
    });

    it('Check if the product is displayed on the cart page', () => {
        expect(cartPage.cartItemName).to.equals(productName);
    });
});
