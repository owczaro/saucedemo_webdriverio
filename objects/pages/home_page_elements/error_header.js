import NonInputText from '../../element_types/non_input_text';

export default class ErrorHeader extends NonInputText {
    constructor() {
        super('h3[data-test="error"]');
    }
}
