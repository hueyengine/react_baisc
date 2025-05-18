// 引入 Count 的 UI 组件
import CountUI from '../../components/Count/index';
// 引入 connnect 用于连接 UI 组件与 redux
import { connect } from 'react-redux';
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from '../../redux/count_action_creator';

// mapStateToProps 用于传递状态
// 函数返回的对象中的 key 作为传递给 UI 组件的 props 的 key，
// value 作为传递给 UI 组件的 props 的 value
function mapStateToProps(state) {
    return {
        count: state,
    };
}

// mapDispatchToProps 用于传递操作状态的方法
// 函数返回的对象中的 key 作为传递给 UI 组件的 props 的 key，value 作为传递给 UI 组件的 props 的 value
function mapDispatchToProps(dispatch) {
    return {
        increment: (number) => dispatch(createIncrementAction(number)),
        decrement: (number) => dispatch(createDecrementAction(number)),
        incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    };
}

// 创建并暴露一个 Count 的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
