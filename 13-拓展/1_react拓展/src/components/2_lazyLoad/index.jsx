//创建外壳组件APP
import React, { Component, lazy, Suspense } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import About from './About/index';
// import Home from './Home/index';
import Loading from './Loading/index';

const Home = lazy(() => import('./Home/index'));
const About = lazy(() => import('./About/index'));

class LazyLoadDemo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink className="list-group-item" to="/about">
                                About
                            </NavLink>
                            <NavLink className="list-group-item" to="/home">
                                Home
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<Loading />}>
                                    {/* 注册路由，也就是写对应的关系 */}
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LazyLoadDemo;
