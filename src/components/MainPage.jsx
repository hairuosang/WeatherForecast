import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';

class MainPage extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="main_page_container">
          <div className="header_text">
            Scan a bar code to store some food!
          </div>
          <div className="photo_icon_container">
            <img className="photo_icon" src="https://www.shareicon.net/data/128x128/2015/12/04/682310_cross_512x512.png" />
          </div>
          <MenuBar />
        </div>
      </div>
    );
  }
}

export default MainPage;
