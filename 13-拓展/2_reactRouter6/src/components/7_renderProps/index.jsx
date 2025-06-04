import React, { Component } from 'react';
import './index.css';

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <A render={(name) => <B name={name} />}>
                  <C>C zy==</C>
                </A>
            </div>
        );
    }
}

class A extends Component {
    state = {
        name: '张三',
    };

    render() {
        const { name } = this.state;
        return (
            <div className="a">
                <h3>我是A组件</h3>
                <p>我的名字是：{name}</p>
                <br />
                {this.props.render(name)}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="b">
                <h3>我是B组件</h3>
                <p>我从A组件接收到的名字是：{this.props.name}</p>
                <br />
            </div>
        );
    }
}


class C extends Component {
  render() {
      return (
          <div className="b">
              <h3>我是C组件</h3>
              <p>我从A组件接收到的名字是：{this.props.children}</p>
              <br />
          </div>
      );
  }
}
