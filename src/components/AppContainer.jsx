import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';

"use strict"

class AppContainer extends React.Component {
  constructor (props){
    super ()
    this.state = {
      currentSelected: [],
    }
    this.selectItem = this.selectItem.bind(this)
  }

  selectItem(event) {
    console.log(event.target);
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

  render (){
    return (
      <div className="main_page_container">
        <div className="notifications_center">
          <h3 className="title2">Notifications </h3>
          <h4 className="title2">About to Expire!</h4>
          <ItemList
            selectItem={this.selectItem}
          />
          <div className="checklist3">
            News: E-coli lettuce out break..
          </div>
          <div className="recipe_popup_container_n">
            {this.props.findRecipes(this.state.currentSelected)} recipes available
          </div>
          <MenuBar changePage={this.props.changePage} />

        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <div className="inventory_block">
        <div className="inventory_top_notification">
          <input type="checkbox" name={this.props.index} onChange={this.props.selectItem} />
          <div className="inventory_info">
            {this.props.message} expires in x days
          </div>
        </div>
      </div>
    );
  }
}



class ItemList extends React.Component {
  constructor (props){
    super ();
    this.state = {
      checked: false,
      expire: 3,
      numCheck: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e){

    this.setState({
      checked: !this.state.checked,
      numCheck: this.state.numCheck + 1,
    });
  }
  render (){
    return (
        <div className="checklist">
          <Item message="Tomato" selectItem={this.props.selectItem} index="0"/>
          <Item message="Pork" selectItem={this.props.selectItem} index="1"/>
          <Item message="Egg" selectItem={this.props.selectItem} index="2"/>
        </div>
    );
  }
}

export default AppContainer;
