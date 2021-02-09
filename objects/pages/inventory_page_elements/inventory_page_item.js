import InventoryItem from '../.shared_elements/inventory_item';
import NameLink from './name_link';

export default class InventoryPageItem extends InventoryItem {
    #nameLink = new NameLink();

    constructor() {
        super('.inventory_item');
    }

    goToProductPage() {
        this.#nameLink.click();
    }
}
