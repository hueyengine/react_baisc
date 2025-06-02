import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    state = {
        hasError: '', // 用于标识子组件是否产生错误
    };

    static getDerivedStateFromError(error) {
        // 当子组件抛出错误时，更新状态
        console.log('getDerivedStateFromError:', error);
        return { hasError: error.message };
    }

    componentDidCatch(error, info) {
        // 可以在这里记录错误日志
        console.log('componentDidCatch:', error, info);
        console.log('此处统计错误，反馈给服务器，用于通知编码人员进行 bug 的解决');
        
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h3 style={{ color: 'red' }}>当前网络不稳定，请稍后再试</h3> : <Child />}
            </div>
        );
    }
}
