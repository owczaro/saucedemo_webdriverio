import Clickable from '../../element_types/clickable';

export default class CartButton extends Clickable {
    constructor() {
        super('.shopping_cart_link');
    }
}
