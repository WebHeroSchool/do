import logo from './logo.svg';
import './App.css';
import {count, length} from './number';
const item = 43;
const elem = false;
const element = true;
const a = 5;
const b = 4;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{ color: 'red'}}>Hello World!</p>
        <p>{item}</p>
        <p>{elem && 'elem is true'}</p>
        <p>{element ? 'element is true' : 'element is false'}</p>
        <p>{a+b}</p>
        <p>
          {undefined}
          {null}
        </p>
        <p>{count * length}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
