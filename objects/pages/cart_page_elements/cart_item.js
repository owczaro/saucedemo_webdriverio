import HTMLItem from '../../element_types/html_item';

export default class CartItem extends HTMLItem {
    constructor() {
        super('.cart_item');
    }

    get name() {
        return $(this.selector + ' .inventory_item_name').getText();
    }
}
