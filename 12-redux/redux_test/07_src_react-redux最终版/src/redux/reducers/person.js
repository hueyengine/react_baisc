import { ADD_PERSON } from '../constant';

const initState = [{ id: '001', name: '小明', age: 18 }]; // 初始化状态
export default function personReducer(preState = initState, action) {
    console.log('personReducer', preState, action);
    
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            // return preState.unshift(data) // 此处不可以这样写，这样会导致 preState 被改写了，personReducer 不是纯函数
            return [data, ...preState]; // 返回新的状态
        default:
            return preState;
    }
}

/**
 * redux 的 reducer 函数必须是纯函数
 */