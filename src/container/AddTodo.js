import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'

let AddTodo = ({dispatch}) => {
    let input;
    const onSubmit = (e) => {
        e.preventDefault();
        if(!input.value.trim()){
            return
        }
        dispatch(addTodo(input.value));
        input.value = ''
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" ref={node => input = node}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo
