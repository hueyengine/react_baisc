
import { combineReducers } from 'redux';
import countReducer from './count';
import personReducer from './person';

// 汇总所有的 reducer 变为一个总的 reducer
export default combineReducers({
    count: countReducer,
    persons: personReducer,
});