import React from "react";
import PropTypes from "prop-types";

const Input = ({value, onKeyPress, addItemHandler, handleChange, clearInputHandler}) => (
    <form onSubmit={addItemHandler}>
        <input onChange={handleChange} value={value}/>
        <button type="submit">Add</button>
        <button onClick={clearInputHandler}>Clear</button>
    </form>
);


Input.propTypes = {
    value: PropTypes.string.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    addItemHandler: PropTypes.func.isRequired,
    clearInputHandler: PropTypes.func.isRequired
};

export default Input;