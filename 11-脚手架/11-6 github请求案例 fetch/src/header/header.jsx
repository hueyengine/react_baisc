import React, { Component } from 'react';
// import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Header extends Component {
    search = async () => {
        //const {value} = this.KeyValue;
        //连续解构赋值，拿到this下面的KeyValue中的value,并进行重命名为KeyWord
        const {
            KeyValue: { value: keyWord },
        } = this;

        //在搜索之前设置,搜索的开始，结束第一次展示
        PubSub.publish('getSate', { isFrist: false, isLoad: true });

        // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
        //     .then(
        //         (response) => {
        //             //关注分离原则，先判断联系服务器是否成功了
        //             console.log('联系服务器成功了', response);
        //             //在通过json获取数据
        //             return response.json(); //获取数据
        //         },
        //         (error) => {
        //             console.log('联系服务器失败了', error);
        //             // 中断Promise链
        //             return new Promise(() => {});
        //         },
        //     )
        //     .then(
        //         (response) => {
        //             console.log('获取数据成功了', response);
        //         },
        //         (error) => {
        //             console.log('获取数据失败了', error);
        //         },
        //     );

        // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
        //     .then((response) => {
        //         //关注分离原则，先判断网络是不是成功
        //         console.log('联系服务器成功了', response);
        //         //在通过json获取数据
        //         return response.json(); //获取数据
        //     })
        //     .then((response) => {
        //         console.log('获取数据成功了', response);
        //     })
        //     .catch((error) => {
        //         // 统计处理错误
        //         console.log('请求出错了', error);
        //     });

        try {
            //链接网络,获取成功的返回值
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`);
            //通过成功的返回值，获取数据 json()只是获取json文件
            //还有其他获取的方法，但是这些方法只能使用一个
            const data = await response.json();
            PubSub.publish('getSate', { isLoad: false, users: data.items });
        } catch (error) {
            console.error('请求出错了', error);
            PubSub.publish('getSate', { isLoad: false, error: error.message });
        }
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
                    <input ref={(c) => (this.KeyValue = c)} type="text" placeholder="输入关键词进行搜索" />
                    &nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}
