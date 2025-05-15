//创建外壳组件APP
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About/index'; // About组件是路由组件，一般放在pages文件夹中
import Home from './pages/Home/index';
import Header from './components/Header'; // Header组件是一般组件，一般放在components文件夹中
import MyNavLink from './components/MyNavLink';

class App extends Component {
    render() {
        //通过 ...将状态中的全部赋值过去
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                                <a className="list-group-item" href="./home.html">Home</a> */}
                            {/* RouteBrowserRouterr:就是利用H5推出的history身上的API
                                HashRouter:就是利用#,也就是锚点 hash值
                            */}

                            {/*NavLink在点击的时候就会去找activeClassName="ss"所指定的class的值，如果不添加默认是active
                                这是因为Link相当于是把标签写死了，不能去改变什么。
                             */}
                            {/* <NavLink  className="list-group-item"  to="/about">About</NavLink>
                                <NavLink className="list-group-item"  to="/home">Home</NavLink> */}

                            {/* 将NavLink进行封装，成为MyNavLink,通过props进行传参数，标签体内容是props特殊的一个属性，叫做children */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由，也就是写对应的关系 */}
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

/**
 * 路由组件和一般组件最大的区别是：路由组件会收到路由器传递过来的三个属性
 * history: 路由器的实例对象
 * location: 当前路由的地址对象
 * match: 匹配到的路由信息对象
 */