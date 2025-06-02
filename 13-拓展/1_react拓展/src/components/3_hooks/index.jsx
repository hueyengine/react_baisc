import React, { Component } from 'react';
import { root } from '../../index';

export class ClassDemo extends Component {
    timer = null; // 定义一个定时器

    state = {
        count: 0,
    };

    myRef = React.createRef(); // 创建一个 ref 对象

    add = () => {
        this.setState(
            (state) => ({ count: state.count + 1 }),
            () => {
                console.log(this.state.count);
            },
        );
    };

    showInputData = () => {
        alert(this.myRef.current.value); // 获取 input 的值
    };

    unmount = () => {
        // ReactDOM.unmountComponentAtNode(document.getElementById('root')); // 18 及以上版本已经弃用
        root.unmount(); // 卸载组件
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((state) => ({ count: state.count + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer); // 清除定时器
        console.log('ClassDemo 组件卸载了');
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <button onClick={this.showInputData}>点我提示数据</button>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unmount}>点我卸载</button>
            </div>
        );
    }
}

/**
 * HookDemo 在初始化和状态更新时都会调用
 * @returns
 */
function HookDemo() {
    // React 底层做了处理，会将上次的值保存起来，更新时不会将 state 重置
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('tom');

    React.useEffect(() => {
        console.log('HookDemo 组件挂载了');
        const timer = setInterval(() => {
            setCount((oldCount) => oldCount + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log('HookDemo 组件卸载了');
        };
    }, []); // 空数组表示只在挂载和卸载时调用

    const myRef = React.useRef(); // 创建一个 ref 对象

    const add = () => {
        // setCount(count + 1); // 第一种写法
        setCount((oldCount) => oldCount + 1); // 第二种写法
    };

    const changeName = () => {
        setName('Jack' + name);
    };

    const unmount = () => {
        // ReactDOM.unmountComponentAtNode(document.getElementById('root')); // 18 及以上版本已经弃用
        root.unmount(); // 18 及以上版本卸载组件的写法
    };

    const showInputData = () => {
        alert(myRef.current.value); // 获取 input 的值
    };

    return (
        <div>
            <input type="text" ref={myRef} />
            <button onClick={showInputData}>点我提示数据</button>
            <h2>当前求和为：{count}</h2>
            <h2>当前名字为：{name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>点我卸载</button>
            <button onClick={showInputData}>点我提示数据</button>
        </div>
    );
}

export default HookDemo;
