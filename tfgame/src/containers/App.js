import React, { Component } from 'react';
import Board from './Board/Board';
import items from '../constants';

import './App.less';


class App extends Component {
  render() {

    console.warn(items)
    return (
      <div className="App">
            <Board />
      </div>
    );
  }
}

export default App;
