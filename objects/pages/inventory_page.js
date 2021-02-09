import InventoryPageItem from './inventory_page_elements/inventory_page_item';
import CartBadge from './.shared_elements/cart_badge';
import CartButton from './.shared_elements/cart_button';

export default class InventoryPage {
    static url = 'https://www.saucedemo.com/inventory.html';
    #inventoryPageItem = new InventoryPageItem();
    #cartBadge = new CartBadge();
    #cartButton = new CartButton();

    get cartItemsCount() {
        return this.#cartBadge.text;
    }

    addToCart() {
        this.#inventoryPageItem.addToCart();
    }

    goToProductPage() {
        this.#inventoryPageItem.goToProductPage();
    }

    clickCart() {
        this.#cartButton.click();
    }
}
