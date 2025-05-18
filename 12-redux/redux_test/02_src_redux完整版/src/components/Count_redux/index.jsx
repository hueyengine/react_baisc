import React, { Component } from 'react';
import store from '../../redux/store';
// 引入 actionCreator，用于创建 action 对象
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from '../../redux/count_action_creator';

export default class Count extends Component {
    state = {
        carName: '奔驰',
    };

    // componentDidMount() {
    //     // 订阅 redux 中的状态变化，只要状态发生变化，就调用 render
    //     store.subscribe(() => {
    //         this.setState({ count: store.getState() });
    //     });
    // }

    increment = () => {
        const { value } = this.selectNumber;
        store.dispatch(createIncrementAction(value * 1));
    };

    decrement = () => {
        const { value } = this.selectNumber;
        store.dispatch(createDecrementAction(value * 1));
    };

    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        const count = store.getState();
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1));
        }
    };

    incrementAsync = () => {
        const { value } = this.selectNumber;
        setTimeout(() => {
            store.dispatch(createIncrementAsyncAction(value * 1, 500));
        }, 2000);
    };

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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
