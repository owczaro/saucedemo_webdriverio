import HTMLItem from './html_item';

export default class NonInputText extends HTMLItem {
    get text() {
        return this.element.getText();
    }
}
