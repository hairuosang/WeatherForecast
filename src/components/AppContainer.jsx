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
      <div className="center">
        <div className="main_page_container">

        <div className="header_text">
            <h3 className="title">Notifications </h3>
        </div>


          <div>
            <ItemList className="checklist" />
            <br />
            <br />
            <ItemCount count={allTheThings.length} />
            <hr />
         
          </div>



          <MenuBar />
        </div>
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
            <div>expires in {this.state.expire} days</div>
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
        <h4 className="checklist">{items}</h4>
    );
  }
}

class ItemCount extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <h5 className="checklist" >{this.props.count} items on your list</h5>
    );
  }
}


export default AppContainer;
