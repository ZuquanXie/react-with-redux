import lodash from 'lodash'
import { ADD_LOG } from '../action'

const defaultState = {
    logs: [],
};

export default (state = defaultState, action) => {
    let newState = lodash.cloneDeep(state);
    switch (action.type) {
        case ADD_LOG:
            let time = new Date().toUTCString();
            newState.logs.push({ id: state.logs.length, text: action.text, mark: action.mark, time: time});
            return newState;
        default:
            return newState
    }
}
