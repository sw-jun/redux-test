import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
                //state가 undefined이면 자동으로 이니셜값 할당되도록 함
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
            // return { ...state, value : state.value + state.diff}
            // ...나열로도 사용가능
        case DECREMENT:
            return { ...state, value: state.value -state.diff}
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
// 더미 리듀서


const counterApp = combineReducers({
    counter,
    extra
});
//리듀서를 합침

export default counterApp;
