import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';
import HeaderBar from './HeaderBar';

class StoragePage extends Component {
  constructor() {
    super();
    this.state = {
      currentState: 0,
      currentSelected: [],
      currentCategory: "all",
    }
    this.onInputSelect = this.onInputSelect.bind(this)
    this.handleClickCategory = this.handleClickCategory.bind(this)
  }

  render() {
    return (
      <div>
        <div className="storage_page_container">
          <HeaderBar changePage={this.props.changePage} headerText={"Storage"} />
          {this.renderStorageHeader()}
          {this.renderInventory()}
          {this.renderPopUp()}
          <MenuBar changePage={this.props.changePage} />
        </div>
      </div>
    );
  }

  renderPopUp() {
    return (
      <div className="recipe_popup_container">
        {this.props.findRecipes(this.state.currentSelected)} recipes available
      </div>
    )
  }

  renderInventory() {
    return (
      <div className="inventory_container">
        {this.renderInventoryUnits()}
      </div>
    )
  }

  onInputSelect(event) {
    if (event.target.checked) {
      this.setState({currentSelected: [...this.state.currentSelected, this.props.storage[event.target.name].name.toLowerCase()]},
        () => {this.props.filterRecipes(this.state.currentSelected)})
    } else {
      this.setState({currentSelected: this.state.currentSelected.filter((item) => {
        return item != this.props.storage[event.target.name].name.toLowerCase()
      })},
      () => {this.props.filterRecipes(this.state.currentSelected)})
    }
  }

  handleClickCategory(category) {
    this.setState({currentCategory: category})
  }

  renderInventoryUnits() {
    var inventory = []
    var index = 0;
    this.props.getStorageByCategory(this.state.currentCategory).map((item) => {
      inventory.push(
        <div className="inventory_block">
          <div className="inventory_top">
            <input type="checkbox" name={index} onChange={this.onInputSelect} />
            <div className="inventory_info">
              {item.name}({item.quantity}) &nbsp;&nbsp;&nbsp;&nbsp;exp: {item.expDate}
            </div>
          </div>
          <div className="inventory_bottom">
            {item.location}
            <div className="inventory_more">
              <img
                className="inventory_more_icon"
                src="https://img.icons8.com/windows/32/000000/info.png"
                onClick={() => {this.props.changeToFoodPage(item)}}
              />
            </div>
          </div>
        </div>
      )
      index++
    })
    return inventory
  }

  renderStorageHeader() {
    return (
      <div className="storage_header">
        <div className="storage_units">
          {this.renderStorageUnits()}
        </div>
      </div>
    )
  }



  renderStorageUnits() {
    var unitList = []
    this.props.storageUnits.map((unit) => {
      const storageStyle = {
        "color": (this.state.currentCategory == unit.name) ? "white" : "black",
        "background": (this.state.currentCategory == unit.name) ? "black" : "white",
      }
      unitList.push(
        <div className="unit" style={storageStyle} onClick={(event) => {this.handleClickCategory(unit.name)}}>
          {unit.name}
        </div>
      )
    })
    return unitList
  }


}

export default StoragePage;
