import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';

"use strict"

class AppContainer extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <div className="main_page_container">
        <AppJumbotron title="Notifications!" />
        <ItemList />
        <ItemCount count={allTheThings.length} />
        <hr />
        <AppFooter />
      </div>
    );
  }
}

class Item extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false,
      expire: 3
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });
  }


  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text} 
            <div className="expiry">expires in {this.state.expire} days</div>
            <hr />
          </div>
        </div>
    );
  }
}

let item2 = <Item message="Spinach"/>;
let item3 = <Item message="Fish" />;
let item4 = <Item message="Bread" />;

let allTheThings = [item2, item3, item4];

class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

class ItemCount extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <h4>There are {this.props.count} items on your list</h4>
    );
  }
}

class AppJumbotron extends React.Component {
  render (){
    return (
      <div className="jumbotron">
        <h2>{this.props.title}</h2>
        <h3>About to expire!</h3>
      </div>
    );
  }
}

class AppFooter extends React.Component {
  render (){
    return (
      <div className="text-muted">
        <small>&copy; {new Date().getFullYear()}</small>
      </div>
    );
  }
}

export default AppContainer;
