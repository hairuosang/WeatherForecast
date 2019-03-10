import React, { Component } from 'react';
import '../App.css';
import MenuBar from './menuBar';
import HeaderBar from './HeaderBar';

class StoragePage extends Component {
  constructor() {
    super();
    this.state = {
      currentState: 0,

    }


  }

  render() {
    return (
      <div>
        <div className="storage_page_container">
        </div>
      </div>
    );
  }

}

export default StoragePage;
