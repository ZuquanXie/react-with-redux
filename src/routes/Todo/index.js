import React from 'react'
import AddTodo from './AddTodo'
import Footer from './Footer'
import VisibleTodoList from './VisibleTodoList'

const Todo = () => {
    return (
        <div className="page-todo">
            <VisibleTodoList />
            <AddTodo />
            <Footer />
        </div>
    )
};

export default Todo
