import Count from './components/Count_no_redux';
import CountRedux from './components/Count_redux';
import './App.css';

function App() {
  return (
    <div className="App">
      <Count />
      <hr />
      <CountRedux />
    </div>
  );
}

export default App;
