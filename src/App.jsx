import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import MainPage from './components/MainPage';
import AppContainer from './components/AppContainer';
import RecipePage from './components/RecipePage';
import SettingsPage from './components/Setting';
import StoragePage from './components/StoragePage';
import FoodDetails from './components/FoodDetails';


const API_KEY =  "0e0fed06a1fde898d79e1142dd554ce0";

class App extends Component {

  constructor() {
    super();
    this.state = {
       currentState: 0
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(stateNumber) {
    this.setState({currentState: stateNumber})
  }

  renderPages() {
    if (this.state.currentState == 0) {
      return (
        <FoodDetails changePage={this.changeState} foodName="fish" 
        image="https://i.imgur.com/zxFvvYF.png" amount="50" expire="3"
        des="description body" han="han body" rec="rec body"  
        />
      )
    } else if (this.state.currentState == 1) {
      return (
        <RecipePage changePage={this.changeState} />
      )
    } else if (this.state.currentState == 2) {
      return (
        <AppContainer changePage={this.changeState} />
      )
    } else if (this.state.currentState == 3) {
      return (
        <StoragePage changePage={this.changeState} />
      )
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          {this.renderPages()}
        </div>
      </div>
    );
  }

}

export default App;
