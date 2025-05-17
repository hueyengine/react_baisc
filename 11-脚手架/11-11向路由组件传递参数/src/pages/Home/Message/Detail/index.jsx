import React, { Component } from 'react';
// import qs from 'qs'; // 引入qs库，用于解析search参数

const detailData = [
    { id: '001', content: '消息1' },
    { id: '002', content: '消息2' },
    { id: '003', content: '消息3' },
]
export default class Detail extends Component {
  render() {
    // // 接收params参数   
    // const { id, title } = this.props.match.params;

    // // 接收search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1)); // 使用qs库解析search参数

    // 接收state参数
    const { id, title } = this.props.location.state || {};
    console.log(this.props.location);
    
    const findContent = detailData.find((item) => {
        return item.id === id
    }) || {};
    return (
        <ul>
            <li>ID:{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{findContent.content}</li>
        </ul>
    )
  }
}
