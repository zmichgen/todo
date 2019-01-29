import * as constans from '../constants'

const initialState = constans.completedFilterDictionary.showAll;

export default function completedFilter(state = initialState, action) {
    switch (action.type) {
        case constans.SHOW_ALL:
            return constans.completedFilterDictionary.showAll;
        case constans.SHOW_COMPLETED:
            return constans.completedFilterDictionary.showCompleted;
        case constans.SHOW_INCOMLETED:
            return constans.completedFilterDictionary.showIncompleted;
        default:
            return state;
    }
} 