/**
 * 该文件专门为 Count 组件生成 action 对象
 * 返回对象的为同步 action
 * 返回函数的为异步 action
 */
import { INCREMENT, DECREMENT } from './constant';

export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

export const createIncrementAsyncAction = (data, time) => {
    // store 会自己调用这个返回的函数
    return () => {
        setTimeout((dispatch) => {
            dispatch(createIncrementAction(data));
        }, time);
    };
};
