import HTMLItem from './html_item';

export default class Clickable extends HTMLItem {
    click() {
        this.element.click();
    }
}
