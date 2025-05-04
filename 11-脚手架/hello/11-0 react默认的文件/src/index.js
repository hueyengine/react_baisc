import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 页面性能分析文件（需要 web-vitals 库的支持）
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//React.StrictMode：检查这个组件以及子组件，是否符合react规范
reportWebVitals();
