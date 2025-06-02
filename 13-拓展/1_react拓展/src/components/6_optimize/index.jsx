import React, { Component, PureComponent } from 'react';
import './index.css';

export default class Parent extends PureComponent {
    state = {
        carName: '奔驰c36',
    };

    changeCar = () => {
        this.setState({
            carName: '迈巴赫',
        });
    }

    // // 该方法在组件更新前调用，返回true或false决定是否允许更新
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps, nextState); // 接下来要变化的目标 props 和 state
    //     console.log(this.props, this.state); // 当前的 props 和 state
        
    //     // 只要carName发生变化，就允许更新
    //     if (nextState.carName !== this.state.carName) {
    //         return true;
    //     }
    //     // 否则不允许更新
    //     return false;
    // }

    render() {
        console.log('Parent组件的render方法被调用了');
        const { carName } = this.state;
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名是：{ carName }</span>
                <br /> 
                <button onClick={this.changeCar}>点我换车</button>
                <br />
                <Child />
            </div>
        );
    }
}

class Child extends PureComponent {
    // // 该方法在组件更新前调用，返回true或false决定是否允许更新
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps, nextState); // 接下来要变化的目标 props 和 state
    //     console.log(this.props, this.state); // 当前的 props 和 state
        
    //     // 只要carName发生变化，就允许更新
    //     if (nextProps.carName !== this.props.carName) {
    //         return true;
    //     }
    //     // 否则不允许更新
    //     return false;
    // }

    render() {
        console.log('Child组件的render方法被调用了');
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我的车名是：{this.props.carName}</span>
            </div>
        );
    }
}
