import React, { Component } from 'react';
import './index.css';

class List extends Component {
    render() {
        const { users, isFrist, isLoad, isError } = this.props;
        return (
            <div className="row">
                {
                    //因为不能在JSX语法中使用if，只能是表达式，所以可以是有用三元运算符进行判断。
                    isFrist ? (
                        <h1>欢迎进入页面</h1>
                    ) : isLoad ? (
                        <h2>正在搜索页面</h2>
                    ) : isError !== '' ? (
                        <h1>{isError}</h1>
                    ) : (
                        //注意传递过来的一定是一个数组，不能是一个对象
                        //要不然初始化的时候对象就是 undefined 在遍历的时候就会出错
                        users.map((userObj) => {
                            return (
                                <div className="card" key={userObj.id}>
                                    <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                        <img alt="headImg" src={userObj.avatar_url} style={{ width: '100px' }} />
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            );
                        })
                    )
                }
            </div>
        );
    }
}

export default List;
