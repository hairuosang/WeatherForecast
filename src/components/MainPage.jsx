import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';
import HeaderBar from './HeaderBar';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      currentState: 0,
      name: "",
      quantity: "",
      exp: "",
      storage: "",
    }
    this.text = [
      "Scan a bar code to store some food!",
      "Confirm the food item that you have scanned!",
      "Please fill in the food that you want to add!",
    ]
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleFormAdd = this.handleFormAdd.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.changeManual = this.changeManual.bind(this);

  }

  render() {
    return (
      <div>
        <div className="main_page_container">
        <HeaderBar changePage={this.props.changePage} />
          <div className="barcode_text">
            {this.text[this.state.currentState]}
          </div>
          {this.renderMainSection()}
          <MenuBar changeManual={this.changeManual} changePage={this.props.changePage} />
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
      return this.renderScanned();
    }
    else if (this.state.currentState == 2) {
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
    this.setState({
      currentState: 1,
      name: "Carrot",
      quantity: "500g",
      exp: "2019-03-12",
      storage: "Fridge",
    });
  }

  handleFormAdd() {
    this.setState({
      currentState: 0,
      name: "",
      quantity: "",
      exp: "",
      storage: "",
    });
  }

  handleFormCancel() {
    this.setState({
      currentState: 0,
      name: "",
      quantity: "",
      exp: "",
      storage: "",
    });
  }

  changeManual() {
    this.setState({
      currentState: 2,
      name: "",
      quantity: "",
      exp: "",
      storage: "",
    });
  }

  renderScanned() {
    return this.renderPopUp();
  }

  handleHandleChange(field, event) {
    this.setState({[field]: event.target.value})
  }

  renderPopUp() {
    return (
      <div className="pop_up_container">
        <div className="pop_up">
          <form>
            <div className="pop_up_divider">
              Name:  <input type="text" name="name" value={this.state.name} onChange={(event) => {this.handleHandleChange("name", event)}}/>
            </div>
            <div className="pop_up_divider">
              Quantity:  <input type="text" name="quantity" value={this.state.quantity} onChange={(event) => {this.handleHandleChange("quantity", event)}}/>
            </div>
            <div className="pop_up_divider">
              Expiry:  <input type="date" name="exp" value={this.state.exp} onChange={(event) => {this.handleHandleChange("exp", event)}}/>
            </div>
            <div className="pop_up_divider">
              Storage:
      			  <select id="select" name="storage" value={this.state.storage} onChange={(event) => {this.handleHandleChange("storage", event)}}>
                <option value="fridge">Fridge</option>
                <option value="freezer">Freezer</option>
      					<option value="pantry">Pantry</option>
      				</select>
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
