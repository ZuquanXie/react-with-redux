import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({Todos, onClickTodo}) => {
    return(
        <ul>
            {Todos.map((todo, index)=><Todo key={index} {...todo} onClick={() => {onClickTodo(index)}} />)}
        </ul>
    )
};

TodoList.propTypes = {
    Todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onClickTodo: PropTypes.func.isRequired
};

export default TodoList
