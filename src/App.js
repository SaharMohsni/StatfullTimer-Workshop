import React, { Component } from 'react';
import './App.css';
import TimerContainer from './components/TimerContaine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerContainer/>
      </div>
    );
  }
}

export default App;
