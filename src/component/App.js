import React from 'react';
import VisibleTodoList from '../routes/VisibleTodoList';
import Footer from '../routes/Todo/Footer';
import AddTodo from '../routes/AddTodo';

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
