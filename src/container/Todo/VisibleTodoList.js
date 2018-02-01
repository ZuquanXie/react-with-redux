import { connect } from 'react-redux'
import { toggleTodo } from '../action'
import TodoList from "../component/TodoList";


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

const mapStateToProps = (state) => {
    return {
        todos: getVisibilityTodo(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickTodo: id => dispatch(toggleTodo(id))
    }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList
