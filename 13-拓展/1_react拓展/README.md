# 一、setState

# 二、lazyLoad

# 三、Hooks
Hook 是 React 16.8.0 版本增加的新特性、新语法，它可以让你在函数组件中使用 state 以及其他的 React 特性。

## 3.1 常用的 Hook
    State Hook: React.useState()
    Effect Hook: React.useEffect()
    Ref Hook: React.useRef()

### 3.1.1 State Hook
State Hook 让函数组件也可以有 state 状态，并进行状态数据的读写操作。

语法：const [xxx, setXxx] = React.useState(initValue)

useState() 说明：
    - 参数：第一次初始化指定的值在内部缓存。
    - 返回值：包含 2 个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数。

setXxx()两种写法：
    - setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
    - setXxx(value => newValue)：参数为函数，接收原本的状态值，返回新的状态值，内部勇气覆盖原来的状态值

### 3.1.2 Effect Hook
    （1）Effect Hook 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期狗子）
    （2）React 中的副作用操作：
        - 发 ajax 请求数据获取
        - 设置订阅/启动定时器
        - 手动更改真实 DOM
    （3）语法和说明：
        useEffect(() => {
            // 在此可以执行任何带副作用的操作
            return () => { // 在组件卸载前执行
                // 在此做一些收尾工作，比如清楚定时器/取消订阅等
            }
        }, [ stateValue ]) // 如果指定的是 [], 回调函数只会在第一次 render()后执行
    （4）可以 useEffect Hook 看做如下三个函数的组合：
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount()

### 3.1.3 Ref Hook
    （1）Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其它数据
    （2）语法：const refContainer = useRef()
    （3）作用：保存标签对象，功能与 React.createRef() 一样

# 四、Fragment
    Fragment 的作用是不用必须有一个真实的 DOM 跟标签了。
```jsx
<Fragment>FragmentDemo</Fragment>

// {用空标签也可以，但是不在在空标签上添加任何属性}
{/* <>FragmentDemo</> */}
```
# 五、Context
    一种组件间的通信方式，常用于组组件与后代组件间的通信。
```jsx
1）创建 Context 容器对象
    const xxxContext = React.createContext();

2）渲染子组件时，外面包裹 xxxContext.Provider，通过 value 属性给后代组件传递数据：
    <xxxContext.Provider value={数据}>
        <子组件 />
    </xxxContext.Provider>

3）后代组件读取数据
    // 第一种方式：仅适用于类组件
    static contextType = xxxContext // 声明接收 context

    // 第二种方式：函数组件与类组件都可以
    <xxxContext.Consumer>
        {
            value => ( // value 就是 context 中的 value 数据
                要显示的内容
            )
        }
    </xxxContext.Consumer>

```

**注意：** 在应用开发中一般不用 context，一般都用它封装 react 插件。

# 六、组件优化
Component 的两个问题：1.只要执行 setState()，即使不改变状态数据，组件也会重新 render()，效率低。2.只要当前组件重新 render()，就会自动重新 render 子组件，纵使子组件没有用到父组件的任何数据，效率低。

效率高的做法：只有当组件的 state 或 props 数据发生改变时才重新 render()。

原因：Component 中的 shouldComponentUpdate()总是返回 true。

解决方案：
办法1：重写 shouldComponentUpdate() 方法。比较新旧 state 或 props 数据，如果有变化才返回 true，如果没有返回 false。

办法2：使用 PureComponent，PureComponent 重写了 shouldComponentUpdate()，只有 state 或 props 数据有变化才返回 true。注意：只是进行了 state 和 props 数据的浅比较，如果只是数据对象内部数据变了，返回 false，不要直接修改 state 数据，而是产生新数据。项目中一般使用 PureComponent 来优化。

# 七、render props
在 React 中向组件内部传入带内容的结构（标签），React 中有两种方式：
    使用 children props：通过组件标签体传入结构。
    使用 render props：通过组件标签属性传入结构，一般用 render 函数属性。

## children props
```jsx
    // 父组件
    <A>
        <B>xxx</B>
    </A>

    // 子组件
    {this.props.children}

    // 问题：如果 B 组件需要 A 组件内的数据，==》做不到
```

## render props

```jsx
    // 父组件
    <A render={(data) => <B data={data}></B>}></A>

    // A 组件
    {this.props.render(内部 state 数据)}

    // B 组件读取 A 组件传入的数据显示
    { this.props.data }
```

# 八、错误边界
错误边界（Error boundary）：用来捕获后代组件错误，渲染出备用页面。只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误。

