import UsernameField from './home_page_elements/username_field';
import PasswordField from './home_page_elements/password_field';
import LoginButton from './home_page_elements/login_button';
import ErrorHeader from './home_page_elements/error_header';

export default class HomePage {
    static url = 'https://www.saucedemo.com/';
    #usernameField = new UsernameField();
    #passwordField = new PasswordField();
    #loginButton = new LoginButton();
    #errorHeader = new ErrorHeader();

    get errorText() {
        return this.#errorHeader.text;
    }

    set username(username) {
        this.#usernameField.value = username;
    }

    get username() {
        return this.#usernameField.value;
    }

    set password(password) {
        this.#passwordField.value = password;
    }

    get password() {
        return this.#passwordField.value;
    }

    open() {
        browser.url(HomePage.url);
    }

    login() {
        this.#loginButton.click();
    }
}
