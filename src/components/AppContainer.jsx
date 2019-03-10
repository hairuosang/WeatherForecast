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
      <div>
        <div className="main_page_container">

        <div>
            <h3 className="title">Notifications </h3>
            <h4 className="title">About to Expire!</h4>
        </div>

          <div>
            <ItemList className="checklist" />
            <div className="checklist">
              News: E-coli lettuce out break..
            </div>
         
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
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.props.onClick}/>
            <div>{this.props.message} expires in {this.props.expire} days</div>
            <hr />
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
          <Item message="Spinach" onClick={this.handleClick} expire="3"/>
          <Item message="Fish" onClick={this.handleClick} expire="4"/>
          <Item message="Bread" onClick={this.handleClick} expire="5"/>
          <h6>{this.state.numCheck} recipes available using chosen ingredients</h6>
        </div>
    );
  }
}

export default AppContainer;
