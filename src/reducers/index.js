import { combineReducers } from 'redux';

import todos from './todos';
import completedFilter from './completedFilter';
import textFilter from './textFilter';

export default combineReducers({
	todos,
	completedFilter,
	textFilter,
})