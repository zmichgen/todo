import React, {Component} from "react";
import Input from './../presentational/Input';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import * as actions from '../../actions'

class InputContainer extends Component {
    state = { text: '' }

    addItemHandler = (evt) => {
        evt.preventDefault();
        this.props.addTodo(this.state.text);
    }

    handleChange = (event) => {
        this.setState({text: event.target.value}, () => {
            this.props.setTextFilter(this.state.text);
        });
    }

    handleKeyPress = (event) => {
        if (this.state.text && event.charCode === 13) {
            this.props.addItemHandler(this.state.text);
        }
    }

    clearInputHandler = () => {
        this.setState({text: ''});
        this.props.setTextFilter('');
    }

    render() {
        return (
            <Input
                value={this.state.text}
                onKeyPress={this.handleKeyPress}
                handleChange={this.handleChange}
                addItemHandler={this.addItemHandler}
                clearInputHandler={this.clearInputHandler}
            />
        );
    }
}


InputContainer.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        addTodo: actions.addTodo,
        setTextFilter: actions.setTextFilter,
    }
)(InputContainer);