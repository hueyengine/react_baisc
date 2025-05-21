import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
         {/* 此处需要使用 Provider 包裹 App，目的是让 App 所有后代容器组件都能接收到 store */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

// 使用 react-redux 后不需要手动订阅 store 的变化，react-redux 会自动帮我们完成
// 并且通过 Provider 组件将 store 传递给所有的子组件

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
