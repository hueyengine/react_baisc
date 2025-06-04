import React, { Component } from 'react';

export default class Demo extends Component {
    state = {
        count: 0,
    };

    add = () => {
        // // 对象式 setState
        // const { count } = this.state;
        // this.setState(
        //     (state) => ({ count: count + 1 }),
        //     (state, props) => {
        //         console.log('state', state); // { count: 1 }
        //         console.log('props', props); // {}
        //     },
        // );

        // 函数式 setState
        this.setState(
            (state, props) => {
                return { count: state.count + 1 };
            },
            (state, props) => {
                console.log('state', state); // { count: 1 }
                console.log('props', props); // {}
            },
        );
    };

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}
