import React, { Component } from 'react';
import Main from './containers/main/main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="m-app">
        <header className="m-app_header">
          <img src={logo} className="m-app_logo" alt="logo" />
          <h1>Winston Zirjacks: React Demo</h1>
        </header>
        <main className="m-app_content">
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
