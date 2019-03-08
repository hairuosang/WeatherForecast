import React from 'react'

const MenuBar = props => {
  return (
    <div className="menu_bar">
      <img className="menu_icon" src="https://i.imgur.com/eusJynU.png" />
      <img className="menu_icon align_left" src="https://i.imgur.com/zxFvvYF.png" onClick={props.changeManual}/>
      <img className="menu_icon align_left" src="https://i.imgur.com/g6KHF1R.png" />
    </div>
  )
}

export default MenuBar;
