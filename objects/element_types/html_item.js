export default class HTMLItem {
    selector;

    constructor(selector) {
        this.selector = selector;
    }

    get element() {
        return $(this.selector);
    }
}
