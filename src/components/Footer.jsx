import React from 'react'

const Footer = () => {
  return (
    <footer className="shadow-md bg-header-txt  w-full">
    <div className="page-width flex justify-between items-center px-4 py-6 text-header-txt text-xl-dk">
      <div className="font-Rubik font-bold text-white">
        <span>Marv.Dev</span>
      </div>
      <nav>
        <ul className="flex gap-6 font-Rubik">
          <li className="menu-item">Home</li>
          <li className="menu-item">Projects</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Contact</li>
        </ul>
      </nav>
    </div>
  </footer>
  )
}

export default Footer