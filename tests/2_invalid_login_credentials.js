import { expect } from 'chai';
import { invalidCredentials } from '../data/credentials';
import { wrongCredentialsErrorMessage } from '../data/common';
import HomePage from '../objects/pages/home_page';

const homePage = new HomePage();

describe('2. Use invalid login credentials and check if error message has been displayed', () => {
    it('Disallows login with incorrect credentials', () => {
        homePage.open();
        homePage.username = invalidCredentials.username;
        homePage.password = invalidCredentials.password;
        homePage.login();
        expect(browser.getUrl()).to.equals(HomePage.url);
    });

    it('Check if error message has been displayed', () => {
        expect(homePage.errorText).to.equals(wrongCredentialsErrorMessage);
    });
});
