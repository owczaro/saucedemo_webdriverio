import InventoryItem from './.shared_elements/inventory_item';
import CartBadge from './.shared_elements/cart_badge';
import CartButton from './.shared_elements/cart_button';

export default class InventoryItemPage {
    static url = 'https://www.saucedemo.com/inventory-item.html?id=4';
    #inventoryItem = new InventoryItem();
    #cartBadge = new CartBadge();
    #cartButton = new CartButton();

    get cartItemsCount() {
        return this.#cartBadge.text;
    }

    addToCart() {
        this.#inventoryItem.addToCart();
    }

    clickCart() {
        this.#cartButton.click();
    }
}
