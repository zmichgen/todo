import * as constants from '../constants'
import * as helpers from '../helpers'

const initialState = [];

const createTodo = (todos, text) => {
	const lastTodo = helpers.tail(todos);
	const id = (lastTodo && lastTodo.id + 1) || 0
	return { id, text, isCompleted: false };
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case constants.REMOVE_TODO:
			return state.filter(todo => todo.id !== action.payload);
		case constants.TOGGLE_TODO:
			return state.map(
				todo => todo.id === action.payload
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo
			);
		case constants.EDIT_TODO:
			return state.map(
				todo => todo.id === action.payload.id
					? { ...todo, text: action.payload.text }
					: todo
			);
		case constants.ADD_TODO:
			return state.concat(createTodo(state, action.payload));
		default:
			return state;
	}
}