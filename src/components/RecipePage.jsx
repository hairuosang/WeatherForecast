import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';
import HeaderBar from './HeaderBar';

class RecipePage extends Component {
  constructor() {
    super();
    this.state = {
      filterSearch: "",
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
      filters: [],
      currentState: 0,
      currentRecipe: {},
    }
    this.handleSearchEnter = this.handleSearchEnter.bind(this);
    this.handleMakeCancel = this.handleMakeCancel.bind(this);
    this.handleMake = this.handleMake.bind(this);
    this.filterRecipes = this.filterRecipes.bind(this);
    this.state.currentRecipes = this.state.recipes;
  }

  render() {
    //console.log(this.state.currentRecipes)
    return (
      <div>
        <div className="recipe_page_container">
          <HeaderBar changePage={this.props.changePage} headerText={"Recipes"}/>
          {this.renderBody()}
          <MenuBar changePage={this.props.changePage}/>
        </div>
      </div>
    );
  }

  renderBody() {
    if (this.state.currentState == 0)
      return this.renderBaseRecipePage();
    else if (this.state.currentState == 1)
      return this.renderViewRecipePage();
    else if (this.state.currentState == 2)
      return this.renderMakeRecipePage();
  }

  renderMakeRecipePage() {
    return (
      <div>
        <div className="view_recipe_block">
          <div className="recipe_title">
            {this.state.currentRecipe.name}
          </div>
          <div className="pop_up_divider">
            Make All:&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox"/>
          </div>
          <div className="ingredient_list">
            {this.renderIngredients()}
          </div>
          <div className="recipe_buttons align_center">
            <div className="pop_up_button" onClick={this.handleMakeCancel}>
              Make
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderViewRecipePage() {
    return (
      <div>
        <div className="view_recipe_block">
          <div className="recipe_title">
            {this.state.currentRecipe.name}
          </div>
          <div className="filter_list">
            Filters:&nbsp;&nbsp;&nbsp;&nbsp;
            {this.renderFilters(this.state.currentRecipe.filters)}
          </div>
          <div className="ingredients_header">
            Ingredients
          </div>
          <div className="filter_list">
            {this.renderFilters(this.state.currentRecipe.ingredients)}
          </div>
          <div className="recipe_details">
            {this.state.currentRecipe.details}
          </div>
          <div className="recipe_buttons">
            <div className="pop_up_button" onClick={this.handleMake}>
              Make
            </div>
            <div className="pop_up_button" onClick={this.handleMakeCancel}>
             Cancel
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderBaseRecipePage() {
    return (
      <div>
        <div className="recipe_filters">
          <div className="recipe_search">
            Filters:
            <input
              type="text"
              name="name"
              value={this.state.filterSearch}
              onChange={(event) => {this.handleChange("filterSearch", event)}}
              onKeyPress={this.handleSearchEnter}
            />
          </div>
          <div className="filter_list">
            {this.renderFilters(this.state.filters)}
          </div>
        </div>
        <div className="recipe_list_container">
          {this.renderRecipes()}
        </div>
      </div>
    )
  }

  renderIngredients() {
    var ingredientList = []
    this.state.currentRecipe.ingredients.map((ingredient) => {
      ingredientList.push(
        <div className="pop_up_divider">
          {ingredient}:&nbsp;&nbsp;&nbsp;&nbsp;
          <select id="select" name="ingredient" value={1}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      )
    })
    return ingredientList;
  }

  filterRecipes() {
    var recipeList = this.state.recipes.filter((recipe) => {
        var filterList = this.state.filters.filter((filter) => {
          return !recipe.filters.includes(filter);
        })
        console.log(filterList);
        return filterList.length == 0;
    })
    console.log(recipeList);
    this.setState({
      currentRecipes: recipeList,
    })
  }

  handleChange(field, event) {
    this.setState({[field]: event.target.value})
  }

  handleMakeCancel() {
    this.setState({
      currentState: 0
    })
  }

  handleMake() {
    this.setState({
        currentState: 2
    })
  }

  handleSearchEnter(event) {
    if (event.key == "Enter") {
      this.setState({
        filters: this.state.filters.concat([this.state.filterSearch]),
        filterSearch: ""},
        this.filterRecipes
      )
    }
  }

  renderFilters(filters) {
    var filterList = []
    filters.map((filter) => {
      filterList.push(
        <div className="filter_container">
          <div className="filter_text">
            {filter}
          </div>
          <div className="filter_close" onClick={() => {this.handleFilterClose(filter)}}>
            <img className="filter_close_image" src="https://img.icons8.com/metro/26/000000/delete-sign.png" />
          </div>
        </div>
      )
    })
    return filterList;
  }

  handleFilterClose(removeFilter) {
    this.setState({
      filters: this.state.filters.filter(oldFilter =>
         oldFilter != removeFilter
      )},
      this.filterRecipes
    )
  }

  renderRecipes() {
    var renderList = []
    this.state.currentRecipes.map((recipe) => {
      renderList.push(this.renderRecipe(recipe))
    })
    return renderList
  }

  renderRecipe(recipe) {
    return (
      <div className="recipe_block" onClick={(event) => this.handleRecipeClick(event, recipe)}>
        <div className="recipe_title">
          {recipe.name}
        </div>
        <div className="recipe_details">
          {recipe.details}
        </div>
      </div>
    )
  }

  handleRecipeClick(event, recipe) {
    this.setState(
      {
        currentState: 1,
        currentRecipe: recipe,
      }
    )
  }

}

export default RecipePage;
