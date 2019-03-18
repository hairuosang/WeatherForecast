import React from 'react'

const MenuBar = props => {
  return (
    <div className="menu_bar">
      <img
        className="menu_icon"
        src="https://i.imgur.com/eusJynU.png"
        onClick={(event) => {props.changePage(4)}}
      />
      <img
        className="menu_icon align_left"
        src={(props.changeManual) ? "https://img.icons8.com/cotton/64/000000/plus.png" : "https://i.imgur.com/zxFvvYF.png"}
        onClick={(props.changeManual) ? props.changeManual : (event) => {props.changePage(0)}}
      />
      <img
        className="menu_icon align_left"
        src="https://i.imgur.com/g6KHF1R.png"
        onClick={(event) => {props.changePage(1)}}
      />
    </div>
  )
}

export default MenuBar;
