//创建外壳组件APP
import React, { Component } from 'react';
import Search from './Search';
import List from './List';

class App extends Component {
    state = {
        users: [],
        isFrist: true,
        isLoading: false,
        isError: '',
    };

    // saveUsers = (stateObj) => {
    //     this.setState(stateObj);
    // };

    updateAppState = (stateObj) => {
        this.setState(stateObj);
    }

    render() {
        //通过 ...将状态中的全部赋值过去
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />

                <List {...this.state} />
            </div>
        );
    }
}

export default App;
