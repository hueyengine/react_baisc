/**
 * 该文件专门为 Count 组件生成 action 对象
 */
import { INCREMENT, DECREMENT } from '../constant';

// 同步 actino 函数的返回值为 Object 类型的一般对象，动作由 reducer 处理
export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 异步 action 函数的返回值为函数
export const createIncrementAsyncAction = (data, time) => {
    // store 帮忙调用这个返回的函数
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    };
};
