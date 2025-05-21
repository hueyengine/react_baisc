import { ADD_PERSON } from '../constant';

const initState = [{ id: '001', name: '小明', age: 18 }]; // 初始化状态
export default function personReducer(preState = initState, action) {
    console.log('personReducer', preState, action);
    
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]; // 返回新的状态
        default:
            return preState;
    }
}
