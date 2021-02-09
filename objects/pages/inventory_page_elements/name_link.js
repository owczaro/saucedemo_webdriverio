import Clickable from '../../element_types/clickable';

export default class NameLink extends Clickable {
    constructor() {
        super('.inventory_item_label a');
    }
}
