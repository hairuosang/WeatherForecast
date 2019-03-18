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
         {name: "all", items: []},
         {name: "Fridge", items: []},
         {name: "Freezer", items: []},
         {name: "Other", items: []},
       ],
       storage: [
         {
           name: "Tomato",
           location: "Fridge",
           expDate: "11/1/2019",
           quantity: "100g",
           han: "amazing food safety tipes",
           description: "amazing facts about this food",
           rec: "amazing and tasty recipes"
         },
         {
           name: "Pork",
           location: "Fridge",
           expDate: "1/1/2019",
           quantity: "400g",
           han: "amazing food safety tipes",
           description: "amazing facts about this food",
           rec: "amazing and tasty recipes"
         },
         {
           name: "Fish",
           location: "Freezer",
           expDate: "2/1/2019",
           quantity: "2pc",
           han: "amazing food safety tipes",
           description: "amazing facts about this food",
           rec: "amazing and tasty recipes"
         },
       ],
       recipes: [
         {
           name: "Tomato and Egg",
           details: "A very nicely and detalied recipe",
           filters: ["tomato", "egg"],
           ingredients: ["tomato", "egg", "salt"],
         },
         {
           name: "Minced Pork",
           details: "A very nicely and detalied recipe",
           filters: ["minced", "pork"],
           ingredients: ["pork", "sauce", "rice"],
         },
       ],
       currentRecipes: [],
       currentFood: {},
       currentFilters: [],
    }
    this.changeState = this.changeState.bind(this)
    this.findRecipes = this.findRecipes.bind(this)
    this.filterRecipes = this.filterRecipes.bind(this)
    this.changeToFoodPage = this.changeToFoodPage.bind(this)
    this.getStorageByCategory = this.getStorageByCategory.bind(this)
    this.addItemToStorage = this.addItemToStorage.bind(this)
    this.removeItemFromStorage = this.removeItemFromStorage.bind(this)
  }

  changeToFoodPage(item) {
    this.setState({currentFood: item, currentState: 5})
  }

  getStorageByCategory(category) {
    console.log(category);
    if (category == "all") {
      return this.state.storage
    }

    var items = this.state.storage.filter((item) => {
      return item.location == category
    })
    return items;
  }

  addItemToStorage(item) {
    this.setState({storage: [...this.state.storage, item]})
  }

  removeItemFromStorage(removeItem) {
    var storage = this.state.storage.filter((item) => {
      return item.name != removeItem.name
    })
    this.setState({storage: storage})
  }


  changeState(stateNumber) {
    if (stateNumber !=  1) {
      this.setState({currentFilters: []})
    }
    this.setState({currentState: stateNumber})
  }

  findRecipes(filters) {
    return this.state.currentRecipes.length
  }

  filterRecipes(filters) {
    var recipeList = this.state.recipes.filter((recipe) => {
        var filterList = filters.filter((filter) => {
          return !recipe.filters.includes(filter);
        })
        return filterList.length == 0;
    })
    this.setState({
      currentRecipes: recipeList,
      currentFilters: filters,
    })
    return recipeList
  }

  renderPages() {
    if (this.state.currentState == 0) {
      return (
        <MainPage
          changePage={this.changeState}
          addItemToStorage={this.addItemToStorage}
        />
      )
    } else if (this.state.currentState == 1) {
      return (
        <RecipePage
          changePage={this.changeState}
          filterRecipes={this.filterRecipes}
          currentFilters={this.state.currentFilters}
        />
      )
    } else if (this.state.currentState == 2) {
      return (
        <AppContainer
          changePage={this.changeState}
          filterRecipes={this.filterRecipes}
          findRecipes={this.findRecipes}
          storage={this.state.storage}
       />
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
          changeToFoodPage={this.changeToFoodPage}
          getStorageByCategory={this.getStorageByCategory}
        />
      )
    } else if (this.state.currentState == 5) {
      return (
        <FoodDetails
          changePage={this.changeState}
          foodName={this.state.currentFood.name}
          image="https://i.imgur.com/zxFvvYF.png"
          amount={this.state.currentFood.quantity}
          expire={this.state.currentFood.expDate}
          des={this.state.currentFood.description}
          han={this.state.currentFood.han}
          rec={this.state.currentFood.rec}
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
