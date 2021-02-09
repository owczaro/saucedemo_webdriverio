import CartItem from './cart_page_elements/cart_item';

export default class CartPage {
    static url = 'https://www.saucedemo.com/cart.html';
    #cartItem = new CartItem();

    get cartItemName() {
        return this.#cartItem.name;
    }
}
