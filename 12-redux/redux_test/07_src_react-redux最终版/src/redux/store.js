
/**
 * 该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */

// 引入 createStore，用于创建 redux 中最为核心的 store 对象
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
 // 引入汇总的 reducer
import allReducers from './reducers/index';
// 引入 redux-thunk，用于支持异步 action
import { thunk } from 'redux-thunk';

export default createStore(allReducers, applyMiddleware(thunk));