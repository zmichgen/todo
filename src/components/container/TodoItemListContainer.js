import React from "react";
import { connect } from 'react-redux';

import * as selectors from '../../selectors';
import TodoItemContainer from "./TodoItemContainer";
import PropTypes from "prop-types";


const TodoItemListContainer = ({ filteredTodos }) => filteredTodos.map(
    todoItem => <TodoItemContainer key={todoItem.id} todoItem={todoItem} />
)

TodoItemListContainer.propTypes = {
    filteredTodos: PropTypes.array.isRequired,
};

export default connect(
    state => ({ filteredTodos: selectors.selectFilteredTodos(state) })
)(TodoItemListContainer);