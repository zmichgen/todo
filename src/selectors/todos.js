import { compose } from '../helpers';
import { selectCompletedFilter } from './completedFilter'
import { completedFilterDictionary } from '../constants';
import { selectTextFilter } from './textFilter';

export const selectTodos = state => state.todos

const selectSummary = state => ({
    summaryCount: state.length,
    completedCount: state.filter(todo => todo.isCompleted).length
})

export const selectFilteredTodos = state => selectTodos(state)
    .filter(todo => {
        switch (selectCompletedFilter(state)) {
            case completedFilterDictionary.showCompleted:
                return todo.isCompleted;
            case completedFilterDictionary.showIncompleted:
                return !todo.isCompleted;
            default:
                return true;
        }
    })
    .filter(todo => {
        const textFilter = selectTextFilter(state);
        return todo.text.includes(textFilter);
    })

export const selectTodosSummary = compose(
    selectSummary,
    selectTodos,
)
