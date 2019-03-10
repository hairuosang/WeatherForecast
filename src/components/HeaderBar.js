import React from 'react'

const HeaderBar = props => {
  return (
    <div className="header_bar">
      <div className="notif_container">
        <img
          className="notif_icon"
          src="https://img.icons8.com/ios-glyphs/30/000000/exclamation-mark.png"
          onClick={(event) => {props.changePage(2)}}
        />
      </div>
      <div className="header_text">
        {props.headerText}
      </div>
      <div className="setting_container">
        <img
          className="setting_icon"
          src="https://img.icons8.com/android/24/000000/settings.png"
          onClick={(event) => {props.changePage(3)}}
        />
      </div>
    </div>
  )
}

export default HeaderBar;
