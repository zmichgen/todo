import React, {Component} from "react";
import TodoItem from "../presentational/TodoItem";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import * as actions from '../../actions';


class TodoItemContainer extends Component {
    state = {
        isModifiable: false
    };

    toggleIsModifiable = () => {
        this.setState({isModifiable: !this.state.isModifiable});
    };

    editTodo = (evt) => {
        const { editTodo, todoItem: { id } } = this.props;
        editTodo(id, evt.target.value);
    }

    toggleTodo = () => {
        const { toggleTodo, todoItem: { id } } = this.props;
        toggleTodo(id);
    }

    removeTodo = () => {
        const { removeTodo, todoItem: { id } } = this.props;
        removeTodo(id);
    }

    render() {
        const todoItem = this.props.todoItem;

        return <TodoItem
            isCompleted={todoItem.isCompleted}
            isModifiable={this.state.isModifiable}
            text={todoItem.text}
            removeTodoItemHandler={this.removeTodo}
            editTodoItemHandler={this.editTodo}
            toggleCompletedHandler={this.toggleTodo}
            toggleIsModifiable={this.toggleIsModifiable}
        />
    }
}


TodoItemContainer.propTypes = {
    todoItem: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
};

export default connect(null, {
    removeTodo: actions.removeTodo,
    toggleTodo: actions.toggleTodo,
    editTodo: actions.editTodo,
})(TodoItemContainer);