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
       currentState: 0,
       storageUnits: [
         {name: "all"},
         {name: "fridge"},
         {name: "freezer"},
       ],
       storage: [
         {
           name: "Tomato",
           location: "Fridge",
           expDate: "11/1/2019",
           quantity: "100g"
         },
         {
           name: "Pork",
           location: "Fridge",
           expDate: "1/1/2019",
           quantity: "400g"
         },
         {
           name: "Fish",
           location: "Freezer",
           expDate: "2/1/2019",
           quantity: "2pc"
         },
       ],
       recipes: [
         {
           name: "Tomato and Egg",
           details: "A very nicely and detalied recipe",
           filters: ["tomato", "egg"],
           ingredients: ["tomato", "egg", "salt"]
         },
         {
           name: "Minced Pork",
           details: "A very nicely and detalied recipe",
           filters: ["minced", "pork"],
           ingredients: ["pork", "sauce", "rice"]
         },
       ],
       currentRecipes: [],
    }
    this.changeState = this.changeState.bind(this)
    this.findRecipes = this.findRecipes.bind(this)
    this.filterRecipes = this.filterRecipes.bind(this)
  }

  changeState(stateNumber) {
    this.setState({currentState: stateNumber})
  }

  findRecipes(filters) {
    return this.state.currentRecipes.length
  }

  filterRecipes(filters) {
    var recipeList = this.state.recipes.filter((recipe) => {
        var filterList = filters.filter((filter) => {
          return !recipe.filters.includes(filter.toLowerCase());
        })
        return filterList.length == 0;
    })
    this.setState({
      currentRecipes: recipeList,
    })
  }

  renderPages() {
    if (this.state.currentState == 0) {
      return (
        <MainPage changePage={this.changeState} />
      )
    } else if (this.state.currentState == 1) {
      return (
        <RecipePage
          changePage={this.changeState}
          filterRecipes={this.filterRecipes}
        />
      )
    } else if (this.state.currentState == 2) {
      return (
        <AppContainer changePage={this.changeState} />
      )
    } else if (this.state.currentState == 3) {
      return (
        <SettingsPage changePage={this.changeState} />
      )
    } else if (this.state.currentState == 4) {
      return (
        <StoragePage
          changePage={this.changeState}
          storageUnits={this.state.storageUnits}
          storage={this.state.storage}
          findRecipes={this.findRecipes}
          filterRecipes={this.filterRecipes}
        />
      )
    } else if (this.state.currentState == 5) {
      return (
        <FoodDetails changePage={this.changeState} foodName="fish"
        image="https://i.imgur.com/zxFvvYF.png" amount="50" expire="3"
        des="description body" han="han body" rec="rec body"
        />
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
