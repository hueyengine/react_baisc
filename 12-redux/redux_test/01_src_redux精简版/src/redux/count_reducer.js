/**
 * @param {*} preState 之前的状态
 * @param {*} action 动作对象
 * @returns 新的状态
 */
const initState = 0; // 初始化状态
export default function countReducer(preState = initState, action) {
    console.log('countReducer', preState, action);
    
    if (preState === undefined) {
        preState = 0; // 初始化状态
    }
    const { type, data } = action;
    switch (type) {
        case 'INCREMENT':
            return preState + data;
        case 'DECREMENT':
            return preState - data;
        default:
            return preState;
    }
}
