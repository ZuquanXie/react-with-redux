import React from 'react';
import VisibleTodoList from '../container/VisibleTodoList';
import Footer from '../component/Footer';
import AddTodo from '../container/AddTodo';

const App = () => {
    return (
        <div>
            <VisibleTodoList />
            <AddTodo />
            <Footer />
        </div>
    )
};

export default App;
