//创建外壳组件APP
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MyNavLink from './components/MyNavLink'; // 一般组件
import Header from './components/Header/index'; // 一般组件
import Home from './pages/Home'; // 路由组件
import About from './pages/About'; // 路由组件

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
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由，也就是写对应的关系 */}
                                {/* 路由可以匹配多个路径,因此可以展示多个组件，但是按道理应该只匹配一个即可，而且多个匹配会很耗费性能
                       Switch:就可以保证路由在匹配到第一个路径之后，就不和继续向下走。 */}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    {/* exact={true}：开启严格匹配的模式，路径必须一致 */}
                                    <Route path="/home" component={Home} />
                                    {/* Redirect:如果上面的都没有匹配到，就匹配到这个路径下面 */}
                                    <Redirect to="/about" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
