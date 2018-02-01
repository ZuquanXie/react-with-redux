import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "../action";

const defaultState = {
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            text: 'learn to use Redux',
            completed: false
        },
        {
            text: 'work for more money',
            completed: false
        },
        {
            text: 'become old',
            completed: true
        }
    ]
};

const Todo = (state=defaultState, action) => {
    switch (action.type){
        case ADD_TODO:
            state.todos.push({ text: action.text, completed: false });
            return state;
        case TOGGLE_TODO:
            state.todos[action.index]['completed'] = !state.todos[action.index]['completed'];
            return state;
        case SET_VISIBILITY_FILTER:
            state.visibilityFilter = action.filter;
            return state;
        default:
            return state;
    }
};

export default Todo
