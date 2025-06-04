import React, { Component } from 'react';
import './index.css';

const UsernameContext = React.createContext();
const { Provider, Consumer } = UsernameContext;

export default class A extends Component {
    state = {
        username: 'Tom',
    };
    render() {
        const { username } = this.state;
        return (
            <div className="parent">
                <h2>我是A组件</h2>
                <h3>我的用户名是：{username}</h3>
                <Provider value={username}>
                    <B />
                </Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h2>我是B组件</h2>
                <h3>我从A组件接收到的用户名是：{this.state}</h3>
                <C />
            </div>
        );
    }
}

class C extends Component {
    // 声明接收 context，render 里面的 this.context 才会有值
    static contextType = UsernameContext;

    render() {
        const { username } = this.context;
        return (
            <div className="grandchild">
                <h2>我是C组件</h2>
                <h3>从A组件接收到的用户名是：{username}</h3>
                <D />
            </div>
        );
    }
}

function D() {
    return (
        <div className="grandchild">
            <h2>我是D组件</h2>
            <h3>
                从A组件接收到的用户名是：
                <Consumer>
                    {(username) => {
                        return username;
                    }}
                </Consumer>
            </h3>
        </div>
    );
}
