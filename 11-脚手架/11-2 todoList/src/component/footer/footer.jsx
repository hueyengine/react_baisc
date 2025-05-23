import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    //全选以及全不选
    handleCheckAll = (event) => {
        //1.如果选中，所有的全都选中
        this.props.checkAllTodo(event.target.checked);
    };

    //删除选中内容
    handleAllDoneClear = () => {
        this.props.clearAllDone();
    };

    render() {
        const { todos } = this.props;
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0);
        }, 0);

        return (
            <div className="todo-footer">
                <label>
                    {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
                    <input
                        onChange={this.handleCheckAll}
                        type="checkbox"
                        checked={doneCount === todos.length && todos.length !== 0 ? true : false}
                    />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </span>
                <button onClick={this.handleAllDoneClear} className="btn btn-danger">
                    清除已完成任务
                </button>
            </div>
        );
    }
}

export default Footer;
