import * as React from 'react';
import './App.css';
import Pure from './Pure';

const logo = require('./logo.svg');

class App extends React.Component<{}, { count: number }> {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            카운트 업
          </button>
        </p>
        <p>{this.state.count}</p>
        <Pure {...this.state} />
      </div>
    );
  }
}

export default App;
