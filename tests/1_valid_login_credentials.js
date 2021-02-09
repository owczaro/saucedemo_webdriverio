import { expect } from 'chai';
import { validCredentials } from '../data/credentials';
import HomePage from '../objects/pages/home_page';
import InventoryPage from '../objects/pages/inventory_page';

const homePage = new HomePage();

describe('1. Use valid login credentials and check if the login process has been successfully ended', () => {
    it('Allows login with valid credentials', () => {
        homePage.open();
        homePage.username = validCredentials.username;
        homePage.password = validCredentials.password;
        homePage.login();
        expect(browser.getUrl()).to.equals(InventoryPage.url);
    });
});
