import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';

"use strict"

class FoodDetails extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <div>
        <div className="main_page_container">
        <div>
            <h3 className="title">{this.props.foodName}</h3>
            <div className="title2">
                <img src={this.props.image} className="menu_icon left"/>
                <div className="rightside"></div>
                <div className>Amount: {this.props.amount} </div>  {"\n"} <br/>
                <div className> Expires on {this.props.expire} </div> 
                <div/>
            </div>
        </div>

          <div>
            <ItemList className="checklist2" des={this.props.des}
                      han={this.props.han} rec={this.props.rec}/>
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
            <div>{this.props.message}: {this.props.body}</div>
            <hr />
          </div>
        </div>
    );
  }
}


class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
        <div className="checklist2">
            <br/>
          <Item message="Description" onClick={this.handleClick} body={this.props.des}/>
         <hr/>
          <Item message="Handling Tips" onClick={this.handleClick} body={this.props.han}/>
        <hr/>
          <Item message="Popular Recipes" onClick={this.handleClick} body={this.props.rec}/>
        </div>
    );
  }
}

export default FoodDetails;
