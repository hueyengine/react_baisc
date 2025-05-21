import React, { Component } from 'react';
// 引入 connnect 用于连接 UI 组件与 redux
import { connect } from 'react-redux';
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from '../../redux/actions/count';

class CountUI extends Component {
    state = {
        carName: '奔驰',
    };

    increment = () => {
        const { value } = this.selectNumber;
        this.props.increment(value * 1);
    };

    decrement = () => {
        const { value } = this.selectNumber;
        this.props.decrement(value * 1)
    };

    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1);
        }
    };

    incrementAsync = () => {
        const { value } = this.selectNumber;
        this.props.incrementAsync(value * 1, 1000);
    };

    render() {
        console.log(111, this.props);
        
        return (
            <div>
                <h1>当前求和为：{this.props.count}，下方组件总人数为：{this.props.persons.length}</h1>
                <select ref={(c) => (this.selectNumber = c)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

// 创建并暴露一个 Count 的容器组件
export default connect(
    (state) => ({ count: state.count, persons: state.person }), // 映射状态
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction,
    }, // mapDispatchToProps
)(CountUI);
