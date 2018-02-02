import lodash from 'lodash';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "../action";

const defaultState = {
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            id: 1,
            text: 'learn to use Redux',
            completed: false
        },
        {
            id: 2,
            text: 'work for more money',
            completed: false
        },
        {
            id: 3,
            text: 'become old',
            completed: true
        }
    ]
};

const Todo = (state=defaultState, action, c) => {
    let newState = lodash.cloneDeep(state);
    switch (action.type){
        case ADD_TODO:
            newState.todos.push({ id: newState.todos.length, text: action.text, completed: false });
            return newState;
        case TOGGLE_TODO:
            newState.todos[action.index].completed = true;
            return newState;
        case SET_VISIBILITY_FILTER:
            newState.visibilityFilter = action.filter;
            return newState;
        default:
            return newState;
    }
};

export default Todo
