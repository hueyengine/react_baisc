
import Count from './containers/Count';
import './App.css';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      {/* {给容器组件传递 store} */}
      <Count store={store} />
      <hr />
    </div>
  );
}

export default App;
