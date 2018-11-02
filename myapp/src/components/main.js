import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/main.css';

class App extends Component {
  render() {
    return (
      <div className="index-box">
        <div className="y-out-box rotateIn"></div>
        <div className="y-int-box"></div>
        <div className="y-int-bg"></div>
        <div className="y-btn">开启盒子</div>
      </div>
    )
  }
}

export default App;