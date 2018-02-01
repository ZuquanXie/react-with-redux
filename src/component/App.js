import React from 'react';
import VisibleTodoList from '../container/VisibleTodoList';
import Footer from './Footer';
import AddTodo from '../container/VisibleTodoList';

const App = () => {
    return (
        <div>
            <VisibleTodoList />
            <Footer/>
            <AddTodo/>
        </div>
    )
};

export default App;
