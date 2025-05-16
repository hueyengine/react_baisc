---
title: react
date: 2021-01-20 11:13:20
---

> 以下是观看尚硅谷 React 课程所做的笔记。
>
> [尚硅谷 React](https://www.bilibili.com/video/BV1wy4y1D7JT?p=43&t=5)

# 第一章 React 入门

## 1.1 React 简介

**react 是什么？**

React 用于构建用户界面的 JS 库。是一个将数据渲染为 HTML 视图的开源 JS 库。

**为什么学？**

1.原生 JS 操作 DOM 繁琐，效率低

2.使用 JS 直接操作 DOM,浏览器会进行大量的重绘重排

3.原生 JS 没有组件化编码方案，代码复用低

> 在学习之前最好看一下关于 npm 的知识：下面是我在网上看见的一个写的还不错的 npm 的文章
>
> [npm](https://blog.csdn.net/qq_25502269/article/details/79346545)

## 1.2 React 的基本使用

1.先倒入三个包：

【先引入 react.development.js，后引入 react-dom.development.js】

```cmd
react.development.js
react-dom.development.js
babel.min.js
```

2.创建一个容器

3.创建虚拟 DOM，渲染到容器中

```html
<body>
    <!-- 准备好容器 -->
    <div id="test">

    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js" type="text/javascript"></script>

<!--这里使用了babel用来解析jsx语法-->
<script type="text/babel">
        // 1.创建虚拟DOM
        const VDOM = <h1>Hello</h1>  //这个地方使用的是JSX语法，不需要加""
        // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
        ReactDOM.render(VDOM,document.getElementById("test"));
</script>
</html>
```

这样，就会在页面中的这个 div 容器上添加这个 h1.

![渲染结果](./react/1611196030416.png)

#### 1.2.1 两种创建虚拟 DOM 的方式

**1.使用 JSX 创建虚拟 DOM**

```jsx
const VDOM = (
    <h1 id={MyId.toLocaleUpperCase()}>
        <span className="sss" style={{ fontSize: '50px' }}>
            sss
        </span>
    </h1>
);
```

这个在上面的案例中已经演示过了 ，下面看看另外一种创建虚拟 DOM 的方式

**2.使用 JS 创建虚拟 DOM**

```js
// 1.创建虚拟DOM[在这使用了js的语法]React.createElement(标签,标签属性,内容)
const VDOM = React.createElement('h1', { id: 'title' }, 'nihao');
```

使用 JS 和 JSX 都可以创建虚拟 DOM，但是可以看出 JS 创建虚拟 DOM 比较繁琐，尤其是标签如果很多的情况下，所以还是比较推荐使
用 JSX 来创建。

## 1.3 JSX 基础语法

1.定义虚拟 DOM，不能使用“”

2.标签中混入 JS 表达式的时候使用{}

3.样式的类名指定不要使用 class，使用 className

4.内敛样式要使用双大括号包裹

5.不能有多个根标签，只能有一个跟标签

6.标签必须闭合

7.如果小写字母开头，就将标签转化为 html 同名元素，如果 html 中无该标签对应的元素，就报错；如果是大写字母开头，react 就去
渲染对应的组件，如果没有就报错

> 关于 JS 表达式和 JS 语句：
>
> JS 表达式：返回一个值，可以放在任何一个需要值的地方 a a+b demo(a) arr.map() function text(){} JS 语句：if(){} for(){}
> while(){} swith(){} 不会返回一个值

实例如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            .sss {
                color: red;
            }
        </style>
    </head>
    <body>
        <!-- 准备好容器 -->
        <div id="test"></div>
    </body>
    <!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
    <script src="../js/react.development.js" type="text/javascript"></script>
    <script src="../js/react-dom.development.js" type="text/javascript"></script>

    <script src="../js/babel.min.js"></script>
    <!--这里使用了js来创建虚拟DOM-->
    <script type="text/babel">
        const MyId = 'title';
        const MyData = 'Cyk';
        // 1.创建虚拟DOM
        const VDOM = (
            <h1 id={MyId.toLocaleUpperCase()}>
                <span className="sss" style={{ fontSize: '50px' }}>
                    sss
                </span>
            </h1>
        );
        // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
        ReactDOM.render(VDOM, document.getElementById('test'));
    </script>
</html>
```

## 1.4 模块化与组件化

向外提供特定功能的 js 程序，一般就是一个 js 文件，我们称之为模块。当应用是以多组件的方式实现，这个应用就是一个组件化的应
用。

用来实现局部功能效果的代码和资源的集合称为组件。当应用是以多组件的方式实现，这个应用是一个组件化的应用。

# 第二章 React 面向组件编程

## 2.1 基本理解与使用

当应用是以多组件的方式实现，这个应用就是一个组件化的应用

> **注意：** 组件名称必须以大写字母开头。
>
> React 会将以小写字母开头的组件视为原生 DOM 标签。例如，< div />`代表 HTML 的 div 标签，而`< Weclome /> 则代表一个组件
> ，并且需在作用域内使用 `Welcome`
>
> 传递的参数，不能在组件中改动

### 2.1.1 函数式组件

```react
//1.先创建函数，函数可以有参数，也可以没有，但是必须要有返回值 返回一个虚拟DOM
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
//2.进行渲染
ReactDOM.Render(<Welcom name = "ss" />,document.getElementById("div"));
```

![结果](./react/1611211670211.png)

让我们来回顾一下这个例子中发生了什么：

1. 我们调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3. `Welcome` 组件将 `Hello, Sara` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `Hello, Sara`。

### 2.1.2 Class 组件

```react
//必须继承React.Component
//然后重写Render()方法，该方法一定要有返回值，返回一个虚拟DOM
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
//渲染 【这个跟之前也是一样的】
ReactDOM.Render(<Welcom name = "ss" />,document.getElementById("div"));
```

执行过程：

​ 1.React 解析组件标签，找到相应的组件

​ 2.发现组件是类定义的，随后 new 出来的类的实例，并通过该实例调用到原型上的 render 方法

​ 3.将 render 返回的虚拟 DOM 转化为真实的 DOM,随后呈现在页面中

### 2.1.3 组件案例

下面，我们通过一个案例更好的理解组件：【只关注与核心代码】

我们发现组件是可以包含中使用的， 而且如果创建的数组，必须要代一个 key。数组元素中使用的 key 在其兄弟节点之间应该是独一无
二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值

```react
<script type="text/babel">

        //创建一个组件<li>
        function GetLi(props){
            return <li>{props.value}</li>
        };

        // 1.创建类式组件<ul>
        class MyComponent extends React.Component{
            render(){
                console.log(this.props.arr);
                let com = this.props.arr.map((item,index)=>
                     //在这个地方包含了GetLi这个组件，【注意不能用{}】
                     //因为这个是一个列表，所以必须传递一个key【独一无二的Key】
                     //key 帮助 React 识别哪些元素改变了，比如被添加或删除。
                        <GetLi value={item} key = {index} />
                    );
                console.log(com);
                return <ul>{com}</ul>
            }
        }

        let num = [1,2,3,4]
        //2.渲染组件
        ReactDOM.render(<MyComponent  arr={num}/>,document.getElementById("test");
</script>

```

## 2.2 组件实例的三大属性

### 2.2.1 state

我们都说 React 是一个状态机，体现是什么地方呢，就是体现在 state 上，通过与用户的交互，实现不同的状态，然后去渲染 UI,这样
就让用户的数据和界面保持一致了。state 是组件的私有属性。

在 React 中，更新组件的 state，结果就会重新渲染用户界面(不需要操作 DOM),一句话就是说，用户的界面会随着状态的改变而改变。

state 是组件对象最重要的属性，值是对象（可以包含多个 key-value 的组合）

**案例**：

1.需求：页面显示【今天天气很炎热】，鼠标点击文字的时候，页面更改为【今天天气很凉爽】

核心代码如下：

```html
<body>
    <!-- 准备好容器 -->
    <div id="test"></div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js"></script>
<!--这里使用了js来创建虚拟DOM-->
<script type="text/babel">
    //1.创建组件
    class St extends React.Component {
        constructor(props) {
            super(props);
            //先给state赋值
            this.state = { isHot: true, win: 'ss' };
            //找到原型的dem，根据dem函数创建了一个dem1的函数，并且将实例对象的this赋值过去
            this.dem1 = this.dem.bind(this);
        }
        //render会调用1+n次【1就是初始化的时候调用的，n就是每一次修改state的时候调用的】
        render() {
            //这个This也是实例对象
            //如果加dem()，就是将函数的回调值放入这个地方
            //this.dem这里面加入this，并不是调用，只不过是找到了dem这个函数，在调用的时候相当于直接调用，并不是实例对象的调用
            return <h1 onClick={this.dem1}>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h1>;
        }
        //通过state的实例调用dem的时候，this就是实例对象
        dem() {
            const state = this.state.isHot;
            //状态中的属性不能直接进行更改，需要借助API
            // this.state.isHot = !isHot; 错误
            //必须使用setState对其进行修改，并且这是一个合并
            this.setState({ isHot: !state });
        }
    }
    // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
    ReactDOM.render(<St />, document.getElementById('test'));
</script>
```

需要注意的是：

1.组件的构造函数，必须要传递一个 props 参数

2.特别关注 this【重点】，类中所有的方法局部都开启了严格模式，如果直接进行调用，this 就是 undefined

3.想要改变 state,需要使用 setState 进行修改，如果只是修改 state 的部分属性，则不会影响其他的属性，这个只是合并并不是覆盖
。

this.setState()，该方法接收两种参数：对象或函数。

1. 对象：即想要修改的 state
2. 函数：接收两个函数，第一个函数接受两个参数，第一个是当前 state，第二个是当前 props，该函数返回一个对象，和直接传递对
   象参数是一样的，就是要修改的 state；第二个函数参数是 state 改变后触发的回调

在此还需要注意的是，setState 有异步更新和同步更新两种形式，那么什么时候会同步更新，什么时候会异步更新呢？

**React 控制之外的事件中调用 setState 是同步更新的。比如原生 js 绑定的事件，setTimeout/setInterval 等**。

**大部分开发中用到的都是 React 封装的事件，比如 onChange、onClick、onTouchMove 等，这些事件处理程序中的 setState 都是异
步处理的。**

```react
//1.创建组件
class St extends React.Component{
    //可以直接对其进行赋值
    state = {isHot:10};
    render(){ //这个This也是实例对象
        return <h1 onClick = {this.dem}>点击事件</h1>
    }
//箭头函数 [自定义方法--->要用赋值语句的形式+箭头函数]
    dem = () =>{
        //修改isHot
        this.setState({ isHot: this.state.isHot + 1})
        console.log(this.state.isHot);
    }
}
```

上面的案例中预期 setState 使得 isHot 变成了 11，输出也应该是 11。然而在控制台打印的却是 10，也就是并没有对其进行更新。这
是因为异步的进行了处理，在输出的时候还没有对其进行处理。

```react
componentDidMount(){
    document.getElementById("test").addEventListener("click",()=>{
        this.setState({isHot: this.state.isHot + 1});
        console.log(this.state.isHot);
    })
}
```

但是通过这个原生 JS 的，可以发现，控制台打印的就是 11，也就是已经对其进行了处理。也就是进行了同步的更新。

**React 怎么调用同步或者异步的呢？**

在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中延时更新，而
isBatchingUpdates 默认是 false，表示 setState 会同步更新 this.state；但是，有一个函数 batchedUpdates，该函数会把
isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会先调用这个 batchedUpdates 将 isBatchingUpdates 修改
为 true，这样由 React 控制的事件处理过程 setState 不会同步更新 this.state。

**如果是同步更新，每一个 setState 对调用一个 render，并且如果多次调用 setState 会以最后调用的为准，前面的将会作废；如果
是异步更新，多个 setSate 会统一调用一次 render**

```react
dem = () =>{
    this.setState({
        isHot:  1,
        cont:444
    })
    this.setState({
    	isHot: this.state.isHot + 1

    })
    this.setState({
        isHot:  888,
        cont:888
    })
}
```

上面的最后会输出：isHot 是 888，cont 是 888

```react
 dem = () =>{

                this.setState({
                    isHot: this.state.isHot + 1,

                })
                this.setState({
                    isHot: this.state.isHot + 1,

                })
                this.setState({
                    isHot: this.state.isHot + 888
                })
            }
```

初始 isHot 为 10，最后 isHot 输出为 898，也就是前面两个都没有执行。

**注意！！这是异步更新才有的，如果同步更新，每一次都会调用 render，这样每一次更新都会 **

**简化版本：**

1.state 的赋值可以不再构造函数中进行

2.使用了箭头函数，将 this 进行了改变

```react
<body>
    <!-- 准备好容器 -->
    <div id="test">

    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js"></script>
<script type="text/babel">
        class St extends React.Component{
            //可以直接对其进行赋值
            state = {isHot:true};
            render(){ //这个This也是实例对象
                return <h1 onClick = {this.dem}>今天天气很{this.state.isHot?"炎热":"凉爽"}</h1>
                //或者使用{()=>this.dem()也是可以的}
            }
            //箭头函数 [自定义方法--->要用赋值语句的形式+箭头函数]
            dem = () =>{
                console.log(this);
                const state =  this.state.isHot;
                this.setState({isHot:!state});
            }
        }
        ReactDOM.render(<St />,document.getElementById("test"));
</script>
```

如果想要在调用方法的时候传递参数，有两个方法：

```react
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通
过[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)和
[`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
来实现。

在这两种情况下，React 的事件对象 `e` 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过
`bind` 的方式，事件对象以及更多的参数将会被隐式的进行传递。

#### state 总结

-   组件中 render 方法中的 this 为组件实例对象，因为这个方法一般由 React 实例化后的实例去调用。
-   组件中自定义方法中的 this 为 undefined，因为自定义方法一般由使用 React 框架的人调用，而不是实例对象调用。如何将 this
    指向实例对象呢？ a. 强制绑定 this：通过函数对象的 bind() b. 箭头函数
-   状态数据，不能直接修改或更新

### 2.2.2 Props

Props 主要用来传递数据，比如组件之间进行传值

基本使用：

```html
<body>
    <div id="div"></div>
</body>
<script type="text/babel">
    class Person extends React.Component {
        render() {
            return (
                <ul>
                    //接受数据并显示
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            );
        }
    }
    //传递数据
    ReactDOM.render(<Person name="tom" age="41" sex="男" />, document.getElementById('div'));
</script>
```

如果传递的数据是一个对象，可以更加简便的使用

```html
<script type="text/babel">
    class Person extends React.Component {
        render() {
            return (
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            );
        }
    }
    const p = { name: '张三', age: '18', sex: '女' };
    ReactDOM.render(<Person {...p} />, document.getElementById('div'));
</script>
```

... 这个符号恐怕都不陌生，这个是一个展开运算符，主要用来展开数组，如下面这个例子：

```js
arr = [1, 2, 3];
arr1 = [4, 5, 6];
arr2 = [...arr, ...arr1]; //arr2 = [1,2,,3,4,5,6]
```

但是他还有其他的用法：

1.复制一个对象给另一个对象{...对象名}。此时这两个对象并没有什么联系了

```js
const p1 = { name: '张三', age: '18', sex: '女' };
const p2 = { ...p1 };
p1.name = 'sss';
console.log(p2); //{name:"张三",age:"18",sex:"女"}
```

2.在复制的时候，合并其中的属性

```js
const p1 = { name: '张三', age: '18', sex: '女' };
const p2 = { ...p1, name: '111', hua: 'ss' };
p1.name = 'sss';
console.log(p2); //{name: "111", age: "18", sex: "女",hua:"ss"}
```

**注意！！** **{...P}并不能展开一个对象**

**props 传递一个对象，是因为 babel+react 使得{..p}可以展开对象，但是只有在标签中才能使用**

**对于 props 限制**

很多时候都想要传递的参数进行相应的限制，比如：限制传递参数的类型，参数的默认值等等

react 对此提供了相应的解决方法：

-   propTypes:类型检查，还可以限制不能为空
-   defaultProps：默认值

```html
<script type="text/babel">


    class Person extends React.Component{
        render(){
            //props是只读的
            return (
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            )
        }
        //对组件的属性对其进行限制
        static propTypes = {
            name:PropTypes.string.isRequired, //限定name是string类型，并且必须要传递
            sex:PropTypes.string,  //限定sex是string类型
            speak:PropTypes.func   //限定speak是function类型
        }
        //指定默认的标签属性
        static defaultProps = {
            sex:"不男不女",
            age:18
        }

    }
    //在js中可以使用{...p}来复制一个对象，但是这个地方并不是复制对象，而是babel+react通过展开运算符，展开了一个对象
    //但是只能在标签中进行使用
    //const p = {name:"张三",age:"18",sex:"女"}   {14}就代表的是数值
    //ReactDOM.render(<Person {...p}/>,document.getElementById("div"));
    ReactDOM.render(<Person name="sss" age = {14} speak="8"/>,document.getElementById("div"));


    function speak(){
        console.log("这个是一个函数")
    }

</script>
</html>

```

**函数式组件的使用**：

函数在使用 props 的时候，是作为参数进行使用的(props)；

```react
function Person(props){
          return (
                <ul>
                    <li>{props.name}</li>
                    <li>{props.age}</li>
                    <li>{props.sex}</li>
                </ul>
            )
    }
```

## 2.2.3 Refs

Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

Refs 主要提供了三种方式：

### 1.字符串形式

在想要获取到一个 DOM 节点，可以直接在这个节点上添加 ref 属性。利用该属性进行获取该节点的值。

案例：给需要的节点添加 ref 属性，此时该实例对象的 refs 上就会有这个值。就可以利用实例对象的 refs 获取已经添加节点的值

```react
<input ref="dian" type="text" placeholder="点击弹出" />

 inputBlur = () =>{
            alert(this.refs.shiqu.value);
        }
```

### 2.内敛函数形式的回调

回调形式会在 ref 属性中添加一个回调函数。将该 DOM 作为参数传递过去。

如：ref 里面就是一个回调函数，self 就是该 input 标签。然后再将该 DOM 元素赋值给实例对象中的一个属性

```html
<input ref={self =>{ this.dian = self;console.log(self)}} placeholder="点击弹出" />
```

![input标签](./react/1611495051999.png)

也可以将函数提取出来，在 ref 中进行调用

```javascript
isRef = (self) => {
    this.dian = self;
    console.log(self);
};

<input ref={this.isRef} type="text" placeholder="点击弹出" />;
```

### 3.API 形式

React 其实已经给我们提供了一个相应的 API，他会自动的将该 DOM 元素放入实例对象中

如下：依旧先在 DOM 元素中添加一个 ref 元素

```javascript
{/*<input ref={this.容器名称} type="text" placeholder="点击弹出" />*/}
<input ref={this.MyRef} type="text" placeholder="点击弹出" />
<input ref={this.MyRef1} type="text" placeholder="点击弹出" />
```

通过 API，创建 React 的容器，相当于省略了回调的中间环节。但是这个容器是专门专用的，所以每一个 ref 都需要创建这个。该 API
会将 DOM 元素赋值给实例对象的名称为容器名称的属性的 current【这个 current 是固定的】

```javascript
{
    /*容器名称 = React.createRef()*/
}
MyRef = React.createRef();
MyRef1 = React.createRef();
```

![API](./react/1611495597978.png)

然后就可以使用了

```react
btnOnClick = () =>{
    //创建之后，将自身节点，传入current中
    console.log(this.MyRef.current.value);
}
```

**官方提示我们不要过度的使用 ref，如果发生事件的元素刚好是需要操作的元素，就可以使用事件去替代。**

## 2.3 React 事件

React 的事件是通过 onXxx 属性指定事件处理函数

​ React 使用的都是自定义的时间，而不是原生的事件

​ React 中的事件是通过事件委托方式处理的

​ 事件中必须返回的是函数

​ 通过 event.target 得到发生事件的 Dom 元素对象

比如：

先声明一个事件，然后在根据事件创建相应的函数，根据事件的 event 参数，将 DOM 元素获取到。

```react
<input onChange={this.saveName} type = "text" name ="username"/>

saveName = (event) =>{
            this.setState({name:event.target.value});
        }
```

**受控和非受控组件**

先来说说受控组件：

使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取
值的表单输入元素就叫做“受控组件”。

```javascript
saveName = (event) =>{
    this.setState({name:event.target.value});
}

savePwd = (event) => {
    this.setState({pwd:event.target.value});
}

render() {
    return (
        <form action="http://www.baidu.com" onSubmit={this.login}>
            用户名：<input value={this.state.name} onChange={this.saveName} type = "text" />
            密码<input value={this.state.pwd} onChange={this.savePwd} type = "password"/>
            <button>登录</button>
        </form>
    )
}
```

由于在表单元素上设置了 `value` 属性，因此显示的值将始终为 `this.state.value`，这使得 React 的 state 成为唯一数据源。由于
`onchange` 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。

对于受控组件来说，输入的值始终由 React 的 state 驱动。

非受控组件：

非受控组件其实就是表单元素的值不会更新 state。输入数据都是现用现取的。

如下：下面并没有使用 state 来控制属性，使用的是事件来控制表单的属性值。

```javascript
class Login extends React.Component {
    login = (event) => {
        event.preventDefault(); //阻止表单提交
        console.log(this.name.value);
        console.log(this.pwd.value);
    };
    render() {
        return (
            <form action="http://www.baidu.com" onSubmit={this.login}>
                用户名：
                <input ref={(self) => (this.name = self)} type="text" name="username" />
                密码：
                <input ref={(self) => (this.pwd = self)} type="password" name="password" />
                <button>登录</button>
            </form>
        );
    }
}
```

## 2.4 高级函数

满足下面两个条件中的任意一个，即是高阶函数。

1.如果函数的参数是函数

2.如果函数返回一个函数

**函数的珂里化**

通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

如下，我们将上面的案例简化，创建高级函数：

```javascript
class Login extends React.Component {
    state = { name: '', pwd: '' };

    //返回一个函数
    saveType = (type) => {
        return (event) => {
            this.setState({ [type]: event.target.value });
        };
    };

    //因为事件中必须是一个函数，所以返回的也是一个函数，这样就符合规范了
    render() {
        return (
            <form>
                <input onChange={this.saveType('name')} type="text" />
                <button>登录</button>
            </form>
        );
    }
}

ReactDOM.render(<Login />, document.getElementById('div'));
```

## 2.5 生命周期

### 2.5.1（旧）

组件从创建到死亡，会经过一些特定的阶段

​ React 组件中包含一系列钩子函数{生命周期回调函数}，会在特定的时刻调用

​ 我们在定义组件的时候，会在特定的声明周期回调函数中，做特定的工作

如下图是旧生命周期的结构图：

![旧生命周期](./react/1611490156766.png)

我们通过一个案例更详细的了解这个生命周期：

```javascript
class A extends React.Component {
    constructor(props) {
        console.log('A --- constructor');
        super(props);
        this.state = { num: 1 };
    }

    add = () => {
        let { num } = this.state;
        this.setState({ num: num + 1 });
        //强制更新
        //this.forceUpdate();
    };

    render() {
        console.log('A --- render');
        return (
            <div>
                <h1>这个是第{this.state.num}个</h1>
                <B name={this.state.num} />
                <button onClick={this.add}>点击加一</button>
            </div>
        );
    }

    //在render之前执行
    componentWillMount() {
        console.log('A --- componentWillMount');
    }

    //在render之后执行
    componentDidMount() {
        console.log('A --- componenetDidMount');
    }

    //更新操作 setState之后执行，判断是否可以更新（true可以，false不可以）
    shouldComponentUpdate() {
        console.log('A --- shouldComponentUpdate');
        return true;
    }
    // 组件将要更新之前
    componentWillUpdate() {
        console.log('A --- componentWillUpdate');
    }
    //组件更新之后，该函数可以接受相应的参数
    componentDidUpdate() {
        console.log('A --- componentDidUpdate');
    }

    //卸载组件之后
    componentWillUnmonut() {
        console.log('A --- componentWillUnmonut');
    }
}
class B extends React.Component {
    render() {
        return (
            <div>
                <h1>这个是B组件,传递过来的是：{this.props.name}</h1>
            </div>
        );
    }
    //父组件进行了更新，子组件先执行这个【注意，第一次传递数据的时候，并不执行】
    componentWillReceiveProps() {
        console.log('A --- componentWillReceiveProps');
    }
}
ReactDOM.render(<A />, document.getElementById('div'));
```

我们在控制台看一下：

当我们刚刚打开控制台的时候，组件第一次加载：

![组件第一次加载](./react/1611568192158.png)

当我们点击按钮更新 sate 的时候：

![更新state](./react/1611568250881.png)

### 2.5.2 （新）

在最新的 react 版本中，有些生命周期钩子被抛弃了，在官网中是这样说的：

我们得到最重要的经验是，过时的组件生命周期往往会带来不安全的编码实践，具体函数如下：

-   `componentWillMount`
-   `componentWillReceiveProps`
-   `componentWillUpdate`

这些生命周期方法经常被误解和滥用；此外，我们预计，在异步渲染中，它们潜在的误用问题可能更大。我们将在即将发布的版本中为这
些生命周期添加 “UNSAFE\_” 前缀。（这里的 “unsafe” 不是指安全性，而是表示使用这些生命周期的代码在 React 的未来版本中更有
可能出现 bug，尤其是在启用异步渲染之后。）

由此可见，新版本中并不推荐持有这三个函数，取而代之的是带有 UNSAFE* 前缀的三个函数，比如: UNSAFE* componentWillMount。即
便如此，其实 React 官方还是不推荐大家去使用，在以后版本中有可能会去除这几个函数。

如下图是新的生命周期：

![新生命周期](./react/1611651795885.png)

从图上可以看出，新生命周期和旧生命周期的区别主要有：

1.抛弃了上面所说的三个钩子函数【其实还可以使用】

2.新添加了两个钩子函数

现在重点说一下，新添加的钩子函数

**static getDerivedStateFromProps(props, state)**

首先，该函数会调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用；该函数必须是静态的；给组件传递的数据
（props）以及组件状态（state），会作为参数到这个函数中；该函数也必须有返回值，返回一个 Null 或者 state 对象。因为初始化
和后续更新都会执行这个方法，因此在这个方法返回 state 对象，就相当于将原来的 state 进行了覆盖，所以倒是修改状态不起作用。

**getSnapshotBeforeUpdate(prevProps, prevState)**

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信
息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递`componentDidUpdate()`。

> 补充一下：componentDidUpdate(prevProps, prevState, snapshot)
>
> 该生命周期函数，可以有三个参数：原始传过来的参数，最开始的状态，getSnapshotBeforeUpdate 传递的值
>
> 关于更多关于生命周期的介绍，可以参考官方文档：
>
> https://zh-hans.reactjs.org/docs/react-component.html#render

以上就是两个新添加的钩子函数，但是在现实开发中可能并不常用这两个。

**案例：在一个区域内，定时的输出以行话，如果内容大小超过了区域大小，就出现滚动条，但是内容不进行移动 **

![案例](./react/BeforeGender.gif)

如上面的动图：区域内部的内容展现没有变化，但是可以看见滚动条在变化，也就是说上面依旧有内容在输出，只不过不在这个区域内部
展现。

**实现：**

【一些 css 样式，就不在这展示了】

1.首先我们先实现定时输出内容

我们可以使用 state 状态，改变新闻后面的值，但是为了同时显示这些内容，我们应该为 state 的属性定义一个数组。并在创建组件之
后开启一个定时器，不断的进行更新 state。更新渲染组件

```javascript
class New extends React.Component {
    state = { num: [] };

    //在组件创建之后,开启一个定时任务
    componentDidMount() {
        setInterval(() => {
            let { num } = this.state;
            const news = num.length + 1;
            this.setState({ num: [news, ...num] });
        }, 2000);
    }

    render() {
        return (
            <div ref="list" className="list">
                {this.state.num.map((n, index) => {
                    return (
                        <div className="news" key={index}>
                            新闻{n}
                        </div>
                    );
                })}
            </div>
        );
    }
}
ReactDOM.render(<New />, document.getElementById('div'));
```

2.接下来就是控制滚动条了

我们在组件渲染到 DOM 之前获取组件的高度，然后用组件渲染之后的高度减去之前的高度就是一条新的内容的高度，这样在不断的累加
到滚动条位置上。

```javascript
getSnapshotBeforeUpdate(){
	return this.refs.list.scrollHeight;
}

componentDidUpdate(preProps,preState,height){
	this.refs.list.scrollTop += (this.refs.list.scrollHeight - height);
}
```

这样就实现了这个功能。

#### 总结

1. 初始化阶段：由 ReactDOM.render()触发——初次渲染
    - constructor()
    - getDerivedStateFromProps()
    - render()
    - componentDidMount()
2. 更新阶段：由组件内部 this.setState() 或父组件重新 render 触发
    - getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpadte()
    - componentDidUpdate()
3. 卸载组件：由 ReactDOM.unmountComponentAtNode()触发
    - componentWillUnmount()

## 2.6 Diff 算法

提到这个算法，就必须说一下关于 Key 的事情了。

其实每个组件中的每个标签都会有一个 key,只不过有的必须显示的指定，有的可以隐藏。

如果生成的 render 出来后就不会改变里面的内容，那么你不需要指定 key（不指定 key 时，React 也会生成一个默认的标识）,或者将
index 作为 key，只要 key 不重复即可。

但是如果你的标签是动态的，是有可能刷新的，就必须显示的指定 key。必须上面案使用 map 进行便利的时候就必须指定 Key:

```javascript
this.state.num.map((n, index) => {
    return (
        <div className="news" key={index}>
            新闻{n}
        </div>
    );
});
```

这个地方虽然显示的指定了 key，但是**官网并不推荐使用 Index 作为 Key 去使用**；

这样会很有可能会有效率上的问题

举个例子：

在一个组件中，我们先创建了两个对象，通过循环的方式放入< li>标签中，此时 key 使用的是 index。

```javascript
person: [
    { id: 1, name: '张三', age: 18 },
    { id: 2, name: '李四', age: 19 },
];

this.state.person.map((preson, index) => {
    return <li key={index}>{preson.name}</li>;
});
```

如下图展现在页面中：

![原始对象数组](./react/1611800406864.png)

此时，我们想在点击按钮之后动态的添加一个对象，并且放入到 li 标签中，在重新渲染到页面中。

我们通过修改 State 来控制对象的添加。

```javascript
<button onClick={this.addObject}>点击增加对象</button>;
addObject = () => {
    let { person } = this.state;
    const p = { id: person.length + 1, name: '王五', age: 20 };
    this.setState({ person: [p, ...person] });
};
```

如下动图所示：

![原始对象数组](./react/addObject.gif)

这样看，虽然完成了功能。但是其实存在效率上的问题， 我们先来看一下两个前后组件状态的变化：

![组件状态的变化](./react/1611800988496.png)

我们发现，组件第一个变成了王五，张三和李四都移下去了。因为我们使用 Index 作为 Key，这三个标签的 key 也就发生了改变【张三
原本的 key 是 0，现在变成了 1，李四的 key 原本是 1，现在变成了 2，王五变成了 0】在组件更新状态重新渲染的时候，就出现了问
题：

因为 react 是通过 key 来比较组件标签是否一致的，拿这个案例来说：

首先，状态更新导致组件标签更新，react 根据 Key，判断旧的虚拟 DOM 和新的虚拟 DOM 是否一致

key = 0 的时候 旧的虚拟 DOM 内容是张三 新的虚拟 DOM 为王五 ，react 认为内容改变，从而重新创建新的真实 DOM.

key = 1 的时候 旧的虚拟 DOM 内容是李四，新的虚拟 DOM 为张三，react 认为内容改变，从而重新创建新的真实 DOM

key = 2 的时候 旧的虚拟 DOM 没有，创建新的真实 DOM

这样原本有两个虚拟 DOM 可以复用，但都没有进行复用，完完全全的都是新创建的；这就导致效率极大的降低。

其实这是因为我们将新创建的对象放在了首位，如果放在最后其实是没有问题的，但是因为官方并不推荐使用 Index 作为 key 值，我们
推荐使用 id 作为 key 值。从而完全避免这样的情况。

**用 index 作为 key 可能会引发的问题:**

1。若对数据进行:逆序添加、逆序删除等破坏顺序操作:

​ 会产生没有必要的真实 DOM 更新 界面效果没问题,但效率低。

2．如果结构中还包含输入类的 DOM:

​ 会产生错误 DOM 更新 界面有问题。

3，注意! 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用 index 作为 key 是没有问题的。

**开发如何选择 key?**

最好使用每一条数据的唯一标识作为 key 比如 id，手机号，身份证号

如果确定只是简单的展示数据，用 Index 也是可以的

**而这个判断 key 的比较规则就是 Diff 算法**

Diff 算法其实就是 react 生成的新虚拟 DOM 和以前的旧虚拟 DOM 的比较规则：

-   如果旧的虚拟 DOM 中找到了与新虚拟 DOM 相同的 key:

    -   如果内容没有变化，就直接只用之前旧的真实 DOM
    -   如果内容发生了变化，就生成新的真实 DOM

-   如果旧的虚拟 DOM 中没有找到了与新虚拟 DOM 相同的 key:
    -   根据数据创建新的真实的 DOM,随后渲染到页面上

# 第三章 React 脚手架

react 提供了一个用于创建 react 项目的脚手架库：create-react-app

## 3.1 面向组件编程

### 3.1.1 创建项目并启动

1.全局安装：npm i -g create-react-app

2.创建项目：create-react-app 项目名

在这一步，有可能会出现：

![不是内部命令](./react/1611803687193.png)

这样可以直接使用：npx create-react-app 项目名

3.等待下载完成，进入项目文件夹，运行一下

比如，我这的项目名称是 hello,就先进入 hello 文件夹

cd hello

npm start //启动这个项目

![启动成功](./react/1611816095069.png)

这个时会自动的打开浏览器，展现这个项目：

![第一个脚手架项目](./react/1611816150630.png)

### 3.1.2 项目的目录结构

我们先来看一下 public 这个目录下面的结构：

![public](./react/1611817630266.png)

这里面最主要的还是这个 Index.html 文件：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <!--%PUBLIC_URL%表示public文件夹的路径-->
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <!--用于开启理想视口，用于移动端页面的适配-->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!--用于配置浏览器地址栏的颜色（仅支持安卓手机浏览器）-->
        <meta name="theme-color" content="#000000" />
        <!--描述网页信息的-->
        <meta name="description" content="Web site created using create-react-app" />
        <!--用于指定网页添加到手机主屏幕后的图标（仅仅支持ios）-->
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <!--应用加壳时候的配置文件 -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>React App</title>
    </head>
    <body>
        <!-- 浏览器不支持JS的运行的时候展现 -->
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>
```

src 文件：

![src文件](./react/1611818262317.png)

这里面其实最主要的就是 App.js 以及 index.js，一个是组件，一个是将组件渲染到页面中的。

### 3.1.3 第一个脚手架应用

1.我们保持 public 中的 Index.html 不变

2.修改 src 下面的 APP.js 以及 index.js 文件

App.js: 【注意：创建好的组件一定要暴露出去】

```javascript
//创建外壳组件APP
import React from 'react';

class App extends React.Component {
    render() {
        return <div>Hello word</div>;
    }
}

export default App;
```

index.js: 【主要的作用其实就是将 App 这个组件渲染到页面上】

```javascript
//引入核心库
import React from 'react';
import ReactDOM from 'react-dom';
//引入组件
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

这样在重新启动应用，就成功了。

![第一个脚手架应用](./react/1611820194124.png)

我们也不建议这样直接将内容放入 App 组件中，尽量还是用内部组件。

我们在顶一个 Hello 组件：

```javascript
import React, { Componet } from 'react';

export default class Hello extends Componet {
    render() {
        return <h1>Hello</h1>;
    }
}
```

在 App 组件中，进行使用

```javascript
class App extends Component {
    render() {
        return (
            <div>
                <Hello />
            </div>
        );
    }
}
```

这样的结果和前面是一样的。

但是由于普通的 Js 和组件都是 js，所一最好组件使用 jsx 去展示。

### 3.1.4 样式冲突

当组件逐渐增多起来的时候，我们发现，组件的样式也是越来越丰富，这样就很有可能产生两个组件中样式名称有可能会冲突，这样会根
据引入 App 这个组件的先后顺序，后面的会覆盖前面的，

为了避免这样的样式冲突，我们采用下面的形式：

1.将 css 文件名修改： hello.css --- >hello.module.css

2.引入并使用的时候改变方式：

```javascript
import React, { Component } from 'react';
import hello from './hello.module.css'; //引入的时候给一个名称

export default class Hello extends Component {
    render() {
        return (
            <h1 className={hello.title}>Hello</h1> //通过大括号进行调用
        );
    }
}
```

## 3.2 TodoList 案例

1.拆分组件:拆分界面，抽取组件

2.实现静态组件

3.实现动态组件

-   动态的显示初始化数据
    -   数据类型
    -   数据名称
    -   保存在哪个组件
-   交互

**注意事项：**

1.拆分组件、实现静态组件。注意 className、style 的写法

2.动态初始化列表，如何确定将数据放在哪个组件的 state 中？

-   某个组件使用：放在自身的 state 中
-   某些组件使用：放在他们共同的父组件中【状态提升】

    3.关于父子组件之间的通信

-   父组件给子组件传递数据：通过 props 传递
-   子组件给父组件传递数据：通过 props 传递，要求父组件提前给子组件传递一个函数

    4.注意 defaultChecked 和 checked 区别，defalutChecked 只是在初始化的时候执行一次，checked 没有这个限制，但是必须添加
    onChange 方法类似的还有：defaultValue 和 value

    5.状态在哪里，操作状态的方法就在哪里

# 第四章 react ajax

React 本身只关注与页面，并不包含发送 ajax 请求的代码，所以一般都是集成第三方的一些库，或者自己进行封装。

推荐使用 axios。

在使用的过程中很有可能会出现跨域的问题，这样就应该配置代理。

所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）， 当一个请求 url 的**协议
、域名、端口**三者之间任意一个与当前页面 url 不同即为跨域 。

那么 react 通过代理解决跨域问题呢

**方法一**

> 在 package.json 中追加如下配置

```json
"proxy":"请求的地址"      "proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了 3000 不存在的资源时，那么该请求会转发给 5000 （优先匹配前端资源）

**方法二**

1. 第一步：创建代理配置文件

    ```
    在src下创建配置文件：src/setupProxy.js
    ```

2. 编写 setupProxy.js 配置具体代理规则：

    ```javascript
    const proxy = require('http-proxy-middleware');

    module.exports = function (app) {
        app.use(
            proxy('/api1', {
                //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
                target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
                changeOrigin: true, //控制服务器接收到的请求头中host字段的值
                /*
          	        changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
          	        changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
          	        changeOrigin默认值为false，但我们一般将changeOrigin值设为true
                */
                pathRewrite: { '^/api1': '' }, //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
            }),
            proxy('/api2', {
                target: 'http://localhost:5001',
                changeOrigin: true,
                pathRewrite: { '^/api2': '' },
            }),
        );
    };
    ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## 4.3 兄弟组件之间进行通信——消息订阅——发布机制

这就要借助消息订阅和发布机制。

举个例子来说就是张三想要跟李四进行通信，张三就需要订阅一个消息【比如 A 消息】，李四想要给张三数据，就必须发布一个 A 消息
，在发布的同时将数据放入消息中，因为张三订阅了名称为 A 的消息，此时就能接受到李四发布的消息，从而获取到数据。

这就有点类似于看报纸，甲想要知道每天都发生什么事情，于是订阅了每天日报，乙每天都会发布这个每天日报，因为甲订阅了，于是乙
就会每天就给甲方推送，甲方从而获取数据。

** 在消息订阅和发布中，我们可以使用 PubSubJs 进行通信：**

引入 PubSubJs:

```javascript
import PubSub from 'pubsub-js';
```

订阅消息：

```javascript
PubSub.subscribe("getSate",(_,data)=>{
            console.log(data)
        })
PubSub.subscribe("订阅的消息名称",回调函数，第一个参数是消息名称，可以使用_来占位，第二个是传递的数据
        })
```

发布消息：

```javascript
PubSub.publish('getSate', { isFrist: false, isLoad: true });
PubSub.publish('订阅的消息名称', 传递的数据);
```

## 4.4 async 和 await

**async:**

该关键字是放在函数之前的，使得函数成为一个异步函数，他最大的特点就是将函数回封装成 Promise，也就是被他修饰的函数的返回值
都是 Promise 对象。而这个 Promise 对象的状态则是由函数执行的返回值决定的。

如果返回的是一个非 promise 对象，该函数将返回一个成功的 Promise，成功的值则是返回的值；

如果返回的是一个 promise 对象，则该函数返回的就是该 promise 对应的状态。

**await**

await 右边是一个表达式，如果该表达式返回的是一个 Promise 对象，则左边接收的结果就是该 Promise 对象成功的结果，如果该
Promise 对象失败了，就必须使用 try..catch 来捕获。如果该表达式返回的是是一个不是 promise 对象，则左边接受的就是该表达式
的返回值。

当 [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) 关键字与异步函数一起使用时
，它的真正优势就变得明显了 —— 事实上， **await 只在异步函数里面才起作用**。它可以放在任何异步的，基于 promise 的函数之前
。它会暂停代码在该行上，直到 promise 完成，然后返回结果值。在暂停的同时，其他正在等待执行的代码就有机会执行了。

举个例子：

```javascript
f1 = () => {
    return new Promise((resolve, reject) => {
        // resolve(1);
        reject('错误');
    });
};

async function test() {
    try {
        const p = await f1();
        console.log(p);
    } catch (error) {
        console.error(error);
    }
}
test();
```

## 4.5 fetch

以前发送请求，使用 ajax 或者 axios，现在还可以使用 fetch。这个是 window 自带的，和 xhr 是一个级别的。

可以查看这个文章，写的真的不错：

[fetch](http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

## github 搜索案例相关知识点

    1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办.
    2. ES6小知识点：解构赋值 + 重命名
        let obj = { a: { b: 1 } }
        const { a } = obj; // 传统解构赋值
        const { a: { b } } = obj; // 连续解构赋值
        const { a: { b: value } } = obj; // 连续解构赋值 + 重命名
    3. 消息订阅与发布机制
        1. 先订阅，再发布（理解：有一种隔空对话的感觉）
        2. 适用于任意组件间通信
        3. 要在组件的 componentWillUnmount 中取消订阅
    4. fetch 发送请求（关注分离设计思想）
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`);
            const data = await response.json();
        } catch (error) {
            console.error('请求出错了', error);
        }

# 第五章 React 路由

## 5.1 SPA

单页 Web 应用(single page web application，SPA)。

整个应用只有一个完整的页面。

点击页面中的链接不会刷新页面，只会做页面的局部更新。

数据都需要通过 ajax 请求获取,并在前端异步展现

## 5.2 什么是路由

一个路由其实就是一个映射关系（k:v）

key 为路径，value 可能是 function 或者是 component

**后端路由：**

value 是 function，用来处理客户端提交的请求

注册路由：router.get(path,function(req,res))

工作过程：当 node 接收一个请求的时候，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应的数据

**前端路由：**

浏览器端路由，value 是 Component，用于展示页面内容

注册路由：< Route path="/test" component={Test}>

工作过程：当浏览器的 path 变为/test 的时候，当前路由组件就会变成 Test 组件

**前端路由的原理**

这个主要是依靠于 history，也就是浏览器的历史记录。

浏览器上的记录其实就是一个栈，前进一次就是入栈，后退一次就是出栈。

并且历史记录上有一个监听的方法，可以时时刻刻监听记录的变化。从而判断是否改变路径

[History](https://developer.mozilla.org/zh-CN/docs/Web/API/History)

## 5.3 react-router-dom

react-router 库有三种实现：

web【主要适用于前端】，native【主要适用于本地】，anywhere【任何地方】

在这主要使用 web 也就是这个标题 react-router-dom，它是 react 的一个插件库，专用实现一个 SPA 应用。

#### 5.3.1 路由的基本的使用

1. 明确好界面中的导航去、展示区；

2. 导航区中的 a 标签改写成 Link 标签

    < Link to="/路径" >xxx< /Link>

3. 展示区写 Route 标签进行路径的匹配

    < Route path = '/路径' component={组件名称}>

4. < App>最外侧包裹了一个< BrowserRouter>或者< HashRouter>

```jsx
<div className="list-group">
    <Link className="list-group-item"  to="/about">About</Link>
    <Link className="list-group-item"  to="/home">Home</Link>
</div>

<div className="panel-body">
    {/* 注册路由，也就是写对应的关系 */}
    <Route path="/about"component={About}/>
    <Route path="/home"component={Home}/>
</div>

// index.js:
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById("root"))
```

那么使用 Link 代替 a 标签之后，在页面上会是什么呢，我们发现其实页面上也是把 link 转化为了 a 标签

#### 5.3.2 路由组件以及一般组件

1.写法不一样

    一般组件：< Demo>
    路由组件：< Route path="/demo" component ={Demo}/>

2.存放的位置一般不同

    一般组件：components
    路由组件：pages

3.接收的内容【props】

    一般组件：写组件标签的时候传递什么，就能收到什么
    路由组件：接收到三个固定的属性【history、location、match】

```javascript
history:
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
location:
    pathname: "/about"
    search: ""
    state: undefined

match:
    params: {}
    path: "/about"
    url: "/about"
```

#### 5.3.3 NavLink 与 封装 NavLink

因为 Link 不能够改变标签体，因此只适合用于一些写死的标签。而如果想要有一些点击的效果，使用 NavLink.

如下代码，就写了 ctiveClassName，当点击的时候就会触发这个 class 的样式

```jsx
{/*NavLink在点击的时候就会去找activeClassName="ss"所指定的class的值，如果不添加默认是active
 这是因为Link相当于是把标签写死了，不能去改变什么。*/}

<NavLink  ctiveClassName="ss" className="list-group-item"  to="/about">About</NavLink>
<NavLink className="list-group-item"  to="/home">Home</NavLink>
```

但是可能一个导航又很多标签，如果这样重复的写 NavLink 也会造成很多的重复性的代码问题。

因此可以自定义一个 NavLink：

```jsx
// 通过{...对象}的形式解析对象，相当于将对象中的属性全部展开
//<NavLink  to = {this.props.to} children = {this.props.children}/>
<NavLink className="list-group-item" {...this.props} />
```

​ 在使用的时候：直接写每个标签中不一样的部分就行，比如路径和名称

```jsx
{
    /*将NavLink进行封装，成为MyNavLink,通过props进行传参数，标签体内容props是特殊的一个属性，叫做children */
}
<MyNavLink to="/about">About</MyNavLink>;
```

#### 5.3.4 Switch 的使用

1. 通常情况下，path 和 component 是一一对应关系。
2. Switch 可以提高路由匹配效率（单一匹配）。

#### 5.3.5 解决多级路径刷新页面样式丢失问题

拿上面的案例来说：

这里面会有一个样式：

![样式表](./react/1612316916900.png)

此时，加载该样式的路径为：

![加载样式路径](./react/1612317786643.png)

但是在访问多级路由后，如下所示，再刷新页面，这个时候就在刷新页面，就会出现问题：

```jsx
<MyNavLink to = "/cyk/about" >About</MyNavLink>
<Route path="/cyk/about"component={About}/>
```

样式因为路径问题加载失败，此时页面返回 public 下面的 index.html

![加载页面失败](./react/1612317880916.png)

解决这个问题，有三个方法：

1. 样式加载使用绝对位置，public/index.html 中引入样式时不写 ./ 而是写 / （常用）

```jsx
 <link href="/css/bootstrap.css" rel="stylesheet">
```

`./css/bootstrap.css` 的含义是以当前文件路径出发，找到当前目录下的 css 文件下的 bootstrap.css 文件，是一个相对路径。
`/css/bootstrap.css` 的含义是在当前服务的服务器根路径中找到 css 文件下的 bootstrap.css 文件，是一个绝对路径。

2. 使用 `%PUBLIC_URL%`，public/index.html 中引入样式时不写 ./ 而是写 `%PUBLIC_URL%` （常用）

```jsx
 <link href="%PUBLIC_URL%/css/bootstrap.css" rel="stylesheet">
```

`%PUBLIC_URL%` 代表 public 文件夹的绝对路径。

3. 使用 HashRouter

因为 HashRouter 会添加 #，# 后面的内容都默认为前端资源，不会带给服务器，默认不会处理 # 后面的路径。当页面重新刷新时，
以`<link href="/css/bootstrap.css" rel="stylesheet">`给服务器发送请求默认不会带 # 后面的路径，即请求 bootstrap.css 静态
资源时不会带 `/cyk/about`.

#### 5.3.6 模糊匹配和精准匹配

1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含【要匹配的路径】，且顺序要一致。
2. 开启严格匹配：<Route exact={true} path="/about" component={About} />
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配耳机路由。

react 默认是开启模糊匹配的。

比如：

```jsx
<MyNavLink to="/home/a/b">Home</MyNavLink>
```

此时该标签匹配的路由，分为三个部分 home a b；将会根据这个先后顺序匹配路由。

如下就可以匹配到相应的路由：

```jsx
<Route path="/home" component={Home} />
```

但是如果是下面这个就会失败，也就是说他是根据路径一级一级查询的，可以包含前面那一部分，但并不是只包含部分就可以。

```jsx
<Route path="/a" component={Home} />
```

当然也可以使用这个精确的匹配 exact={true}

如以下：这样就精确的匹配/home，则上面的/home/a/b 就不行了

```jsx
<Route exact={true}  path="/home" component={Home}/>
或者
<Route exact path="/home" component={Home}/>
```

​

#### 5.3.7 初始化路由——Redirect 的使用

在配置好路由，最开始打开页面的时候，应该是不会匹配到任意一个组件。这个时候页面就显得极其不合适，此时应该默认的匹配到一个组件。

![空组件](./react/RouterDef.gif)

此时就需要使用 Redirect 进行默认匹配了。如下的代码就是默认匹配/home 路径所到的组件。一般卸载所有路由注册的最下方，当所有路由都无法匹配时，跳转到 Redirect 指定的路由。

```jsx
<Switch>
    <Route path="/about" component={About} />
    {/* exact={true}：开启严格匹配的模式，路径必须一致 */}
    <Route path="/home" component={Home} />
    {/* Redirect:如果上面的都没有匹配到，就匹配到这个路径下面 */}
    <Redirect to="/home" />
</Switch>
```

就可以做到如下的效果：

#### 5.3.8 嵌套路由
![设置默认值](./react/RouterSetDef.gif)

简单来说就是在一个路由组件中又使用了一个路由，就形成了嵌套路由。

举个例子来说：

我们在 home 这个路由组件中又添加两个组件：

```jsx
APP.jsx:
<Route   path="/home" component={Home}/>
Home.jsx:
<div>
    <ul className="nav nav-tabs">
    <li>
    	<MyNavLink to = "/home/news">News</MyNavLink>
    </li>
    <li>
    	<MyNavLink  to = "/home/message">Message</MyNavLink>
    </li>
    </ul>

    <Switch>
        <Route path = "/home/news" component={News} />
        <Route path = "/home/message" component={Message} />
        <Redirect to="/home/message"/>
    </Switch>
</div>
```

react 中路由的注册是有顺序的，因此在匹配的时候也是按照这个顺序进行的，因此会先匹配父组件中的路由

比如上面的 /home/news 的路由处理过程：

1.因为父组件 home 的路由是先注册的，因此在匹配的时候先去找 home 的路由，也就是根据/home/news 先模糊匹配到/home，Home 组件挂载。

2.在去 Home 组件里面去匹配相应的路由，从而找到了/home/news 进行匹配，因此找到了 News 组件。

但是如果开启精确匹配，就会在第一步的时候卡住，这个时候就走不下去了。**因此不要轻易的使用精确匹配**

1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

#### 5.3.9 向路由组件传递参数
    1. params 参数
        路由链接（携带参数）：<Link to="/demo/test/tom/18">详情</Link>
        注册路由（声明接收）：<Route path='/demo/test/:name/:age' component={Test} />
        接收参数：const { name, age } = this.props.match.params
    2. search 参数
        路由链接（携带参数）：<Link to="/demo/test?name=tom&age=18">详情</Link>
        注册路由（无需声明，正常注册即可）：<Route path='/demo/test' component={Test} />
        接收参数：const { search } = this.props.location
        备注：获取到 search 是 urlencoded 编码字符串，需要借助 querystring 解析。
    3. state 参数
        路由链接（携带参数）：<Link to={{path: '/demo/test', state: { name: 'tom', age: '18' }}}>详情</Link>
        注册路由（无需声明，正常注册即可）：<Route path='/demo/test' component={Test} />
        接收参数：this.props.location.state
        备注：刷新也可以保留住参数

#### 5.3.11 BrowerRouter 和 HashRouter
    1. 底层原理不一样：
        BrowerRouter 使用的是 H5 的 history API，不兼容 IE9 及以下版本。
        HashRouter 使用的是 URL 的哈希值。
    2. path 表现形式不一样
        BrowserRouter 的路径中没有 #，例如：localhost:3000/demo/test
        HashRouter 的路径包含 #，例如：localhost:3000/#/demo/test
    3. 刷新后对路由 state 参数影响
        （1）BrowserRouter 没有任何影响，因为 state 保存在 history 对象中。
        （2）HashRouter 刷新后会导致路由 state 参数丢失！！！
    4. 备注：HashRouter 可以用于解决一些路径错误相关的问题。
