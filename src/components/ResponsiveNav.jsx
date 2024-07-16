import React, { useState } from 'react'
import Hamburger from 'hamburger-react'


export default function ResponsiveNav() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <button className="menu-icon">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contects</li>
        <li>Services</li>
      </ul>
    </div>
  )
}
