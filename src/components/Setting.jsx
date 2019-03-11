import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';
import SettingBar from './settingBar';

"use strict"

class Setting extends React.Component {
  constructor (props){
    super ();

    this.state = {
      clicked : false
    }

	this.handlePhotoClick = this.handlePhotoClick.bind(this);
  }

  handlePhotoClick() {  //handle setting icon click
    this.setState({
      clicked : true,
    });
  }

  render (){
    return (
      <div>
        <div className="main_page_container">

        <h3 className="title2">
        <div onClick={this.handlePhotoClick}>
        <img src="https://img.icons8.com/ios/50/000000/settings-filled.png"></img>
			  </div>
         <div className="settingtitle">Settings</div>
         </h3>

          <div>
            <div>
            <h4 className="filter_text">Notifications -> Alert</h4>
            <ItemList />
            <h4 className="filter_text">Notify Expiry</h4>
            </div>
            <br />
            <h4 className="filter_text checklist">Recipe Preferences</h4>
            <br />
            <div className="fixbottom">
            <SettingBar>Allergies</SettingBar>
            <SettingBar>Appliances</SettingBar>
            <SettingBar>Preference</SettingBar>
            </div> 
            <hr />

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
        <div>
          <div>
            &nbsp;{text}
            <Toggler onClick={this.handleClick} />
            <hr />
          </div>
        </div>
    );
  }
}


class Toggler extends React.Component {
  static defaultProps = {
    onText: 'On',
    offText: 'Off',
  };

  constructor(props) {
    super(props);

    this.state = { checked: props.checked };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <input
        type="checkbox"
        disabled={this.props.disabled}
        checked={this.state.checked}
        onChange={this.handleChange}
        data-text-on={this.props.onText}
        data-text-off={this.props.offText}
      />
    );
  }
}


let item1 = <Item message="Push Notifications"/>;
let item2 = <Item message="News"/>;

let allTheThings = [item1, item2];

class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
        <h4 className="settingTop">{items}</h4>
    );
  }
}

class ItemCount extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <h5 className="checklist" >Recipe Preferences</h5>
    );
  }
}





export default Setting;
