import React from 'react'

const settingBar = props => {
  return (
    <div className="setting_bar">
      <h4>{props.children}</h4>
      <img className="menu_icon" src="https://img.icons8.com/dusk/64/000000/edit.png"/>
      <img src="https://img.icons8.com/ios/50/000000/box-important.png"></img>
    </div>
  )
}

export default settingBar;
