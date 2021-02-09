import HTMLItem from '../../element_types/html_item';
import AddToCartButton from './add_to_cart_button';

export default class InventoryItem extends HTMLItem {
    #addToCartButton = new AddToCartButton();

    constructor() {
        super('.inventory_item');
    }

    addToCart() {
        this.#addToCartButton.click();
    }
}
