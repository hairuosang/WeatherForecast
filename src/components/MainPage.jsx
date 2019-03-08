import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {currentState: 0}
    this.text = [
      "Scan a bar code to store some food!",
      "Confirm the food item that you have scanned!",
      "Please fill in the food that you want to add!",
    ]
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleFormAdd = this.handleFormAdd.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);

  }

  render() {
    return (
      <div>
        <div className="main_page_container">
          <div className="header_text">
            {this.text[this.state.currentState]}
          </div>
          {this.renderMainSection()}
          <MenuBar />
        </div>
      </div>
    );
  }

  renderMainSection() {
    console.log(this.state.currentState);
    if (this.state.currentState == 0) {
      return this.renderPhotoIcon();
    }
    else if (this.state.currentState == 1) {
      return this.renderPopUp();
    }
  }

  renderPhotoIcon() {
    return (
      <div className="photo_icon_container" onClick={this.handlePhotoClick}>
        <img className="photo_icon" src="https://www.shareicon.net/data/128x128/2015/12/04/682310_cross_512x512.png" />
      </div>
    )
  }

  handlePhotoClick() {
    this.setState({currentState: 1});
  }

  handleFormAdd() {
    this.setState({currentState: 0});
  }

  handleFormCancel() {
    this.setState({currentState: 0});
  }

  renderScanned() {

  }

  renderPopUp() {
    return (
      <div className="pop_up_container">
        <div className="pop_up">
          <form>
            <div className="pop_up_divider">
              Name: <input type="text" name="name" value="Carrot"/>
              </div>
            <div className="pop_up_divider">
              Quantity: <input type="text" name="quantity" value="500g"/>
            </div>
            <div className="pop_up_divider">
              Expiray Date: <input type="text" name="exp" value="11/19/2019"/>
            </div>
            <div className="pop_up_divider">
              Storage: <input type="text" name="storage" value="Fridge"/>
            </div>
            <div className="form_buttons">
              <div className="pop_up_button cancel" onClick={this.handleFormCancel}>
                Cancel
              </div>
              <div className="pop_up_button add" onClick={this.handleFormAdd}>
                Add
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default MainPage;
