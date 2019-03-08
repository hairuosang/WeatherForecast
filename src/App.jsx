import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import MainPage from './components/MainPage';

const API_KEY =  "0e0fed06a1fde898d79e1142dd554ce0";

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="wrapper">
          <MainPage />
        </div>
      </div>
    );
  }
}

export default App;
