import React from 'react'

function Header() {
  return (
    <div className="Header">
      <p className="header-title">
        The Local Art Collection of Port 4044
        </p>
      <nav className="navbar">
        <button className="submit-art-button">Submit Art</button>
        <button className="message-board-button">Message Board</button>
      </nav>
    </div>
  )
}
export default Header