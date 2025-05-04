import React,{Component}from 'react'
import hello from './hello.module.css'

export default class Hello extends Component{
    render() {
        return (
            <h1 className={hello.title}>Hello</h1>
        )
    }
}

/**
 * hello.jsx 文件以 jsx 结尾，表明它是一个 React 组件文件
 * 但是为了区分 React 组件和普通的 js 文件，建议使用 .jsx 结尾
 * 当然，使用 .js 结尾也可以
 * 但是在使用 .js 结尾时，建议在文件开头添加注释，说明这是一个 React 组件文件
 * 例如：
 * 在 react 中，文件名后缀 .jsx 和 .js 都可以省略
 */