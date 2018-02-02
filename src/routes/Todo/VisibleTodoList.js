import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, addLog } from '../../action'
import TodoList from "../../component/TodoList";


const getVisibilityTodo = (todos, filter) => {
    switch (filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter( todo => todo.completed) || [];
        case 'SHOW_ACTIVE':
            return todos.filter( todo => !todo.completed) || [];
        default:
            return todos
    }
};

const VisibleTodoList = ({ todos, dispatch }) => {
    const handleClick = (index) => {
        //change todo`s status
        dispatch(toggleTodo(index));
        //push log
        dispatch(addLog(`Complete todo("${todos[index]['text']}")`, 'complete'))
    };
    return <TodoList todos={todos} onClickTodo={handleClick}/>
};

const mapStateToProps = ({ Todo }) => {
    return {
        todos: getVisibilityTodo(Todo.todos, Todo.visibilityFilter)
    }
};

export default connect(mapStateToProps)(VisibleTodoList)
