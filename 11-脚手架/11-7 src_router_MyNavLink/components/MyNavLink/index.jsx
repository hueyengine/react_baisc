import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class MyNavLink extends Component {
  render() {
    return (
      // 通过{...对象}的形式解析对象，相当于将对象中的属性全部展开
      // <NavLink className="list-group-item" to={this.props.to} children={this.props.children} />
      // <NavLink className="list-group-item" {...this.props}>{this.props.children}</NavLink>
      <NavLink className="list-group-item" {...this.props} />
    );
  }
}

/**
 * 标签体内容是一个特殊的标签属性，可以通过 props.children 获得
 * 上述三种写法都可以用
 * */
