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
    }
    this.onInputSelect = this.onInputSelect.bind(this)
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
      this.setState({currentSelected: [...this.state.currentSelected, this.props.storage[event.target.name].name]},
        () => {this.props.filterRecipes(this.state.currentSelected)})
    } else {
      this.setState({currentSelected: this.state.currentSelected.filter((item) => {
        return item != this.props.storage[event.target.name].name
      })},
      () => {this.props.filterRecipes(this.state.currentSelected)})
    }
  }

  renderInventoryUnits() {
    var inventory = []
    var index = 0;
    this.props.storage.map((item) => {
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
              <img className="inventory_more_icon" src="https://img.icons8.com/windows/32/000000/info.png" />
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
        <img className="storage_add_icon" src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </div>
    )
  }

  renderStorageUnits() {
    var unitList = []
    this.props.storageUnits.map((unit) => {
        unitList.push(
          <div className="unit">
            {unit.name}
          </div>
        )
    })
    return unitList
  }


}

export default StoragePage;
