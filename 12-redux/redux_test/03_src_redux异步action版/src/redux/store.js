
/**
 * 该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import countReducer from './count_reducer';
// 引入 redux-thunk，用于支持异步 action
import { thunk } from 'redux-thunk';

export default createStore(countReducer, applyMiddleware(thunk));