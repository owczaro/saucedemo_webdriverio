import HTMLItem from './html_item';

export default class TextInput extends HTMLItem {
    set value(value) {
        this.element.setValue(value);
    }

    get value() {
        return this.element.getValue();
    }
}
