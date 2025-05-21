
/**
 * 该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import countReducer from './reducers/count';
import personReducer from './reducers/person';
// 引入 redux-thunk，用于支持异步 action
import { thunk } from 'redux-thunk';

// 汇总所有的 reducer 变为一个总的 reducer
const allReducers = combineReducers({
    count: countReducer,
    person: personReducer,
});
export default createStore(allReducers, applyMiddleware(thunk));