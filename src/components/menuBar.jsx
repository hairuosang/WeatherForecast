import React from 'react'

const MenuBar = props => {
  return (
    <div className="menu_bar">
      <img className="menu_icon" src="https://img.icons8.com/android/24/000000/fridge.png" />
      <img className="menu_icon align_left" src="https://img.icons8.com/dusk/64/000000/edit.png" onClick={props.changeManual} />
      <img className="menu_icon align_left" src="https://img.icons8.com/ios-glyphs/30/000000/beer-recipe.png" />
    </div>
  )
}

export default MenuBar;
