import React, { Component } from 'react';

export default class Child extends Component {
    state = {
        // users: [
        //     { id: 1, name: '张三', age: 18 },
        //     { id: 2, name: '李四', age: 20 },
        //     { id: 3, name: '王五', age: 22 },
        // ],
        users: '111',
    };

    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                <ul>
                    {this.state.users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.age}岁
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => {
                        // 故意抛出错误
                        throw new Error('故意抛出的错误');
                    }}>
                    点击我，抛出错误
                </button>
            </div>
        );
    }
}
