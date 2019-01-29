import * as constants from '../constants';

export default function textFilter(state = '', action) {
    switch (action.type) {
        case constants.SET_TEXT_FILTER:
            return action.payload;
        default:
            return state;
    }
}