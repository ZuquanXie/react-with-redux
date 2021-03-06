export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_LOG = 'ADD_LOG';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text){
    return{
        type: ADD_TODO,
        text: text
    }
}

export function toggleTodo(index){
    return{
        type: TOGGLE_TODO,
        index: index
    }
}

export function setVisibility(filter){
    return{
        type: SET_VISIBILITY_FILTER,
        filter: filter
    }
}

export function addLog (text, mark) {
    return {
        type: ADD_LOG,
        text: text,
        mark: mark,
    }
}
