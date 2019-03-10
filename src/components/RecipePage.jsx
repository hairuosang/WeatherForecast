import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';

class RecipePage extends Component {
  constructor() {
    super();
    this.state = {
      filterSearch: "",
      recipes: [
        {name: "Tomato and Egg", details: "A very nicely and detalied recipe"},
        {name: "Minced Pork", details: "A very nicely and detalied recipe"},
      ],
      filters: []
    }
    this.handleSearchEnter = this.handleSearchEnter.bind(this);

  }

  handleChange(field, event) {
    this.setState({[field]: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="recipe_page_container">
          <div className="recipe_header">
            Recipes
          </div>
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
              {this.renderFilters()}
            </div>
          </div>
          <div className="recipe_list_container">
            {this.renderRecipes()}
          </div>
          <MenuBar />
        </div>
      </div>
    );
  }

  handleSearchEnter(event) {
    if (event.key == "Enter") {
      this.setState({
        filters: this.state.filters.concat([this.state.filterSearch]),
        filterSearch: "",
      })
    }
  }

  renderFilters() {
    var filterList = []
    this.state.filters.map((filter) => {
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
      )}
    )
  }

  renderRecipes() {
    var renderList = []
    this.state.recipes.map((recipe) => {
      renderList.push(this.renderRecipe(recipe))
    })
    console.log(renderList);
    return renderList
  }

  renderRecipe(recipe) {
    return (
      <div className="recipe_block">
        <div className="recipe_title">
          {recipe.name}
        </div>
        <div className="recipe_details">
          {recipe.details}
        </div>
      </div>
    )
  }

}

export default RecipePage;
