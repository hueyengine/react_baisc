
/**
 * 该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */
import { legacy_createStore as createStore } from 'redux';
import countReducer from './count_reducer';

export default createStore(countReducer);