import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { addTodo, addLog } from '../../action'

let AddTodo = ({dispatch}) => {
    let input;
    const onSubmit = (e) => {
        e.preventDefault();
        if(!input.value.trim()){
            return
        }
        //add todo
        dispatch(addTodo(input.value));
        //push log
        dispatch(addLog(`Add todo("${input.value}")`, 'add'));
        input.value = ''
    };
    const onClickCheckLog = (e) => {
        dispatch(push('/log'));
    };
    return(
        <div style={{position: 'relative'}}>
            <form onSubmit={onSubmit}>
                <input type="text" ref={node => input = node}/>
                <button type="submit">Add</button>
            </form>
            <span className="log" onClick={onClickCheckLog}>Operation log</span>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo
