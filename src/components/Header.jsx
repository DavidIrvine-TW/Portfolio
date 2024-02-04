import React from "react";

function Header() {
  return (
    <header className="shadow-md bg-white  w-full">
      <div className="page-width flex justify-between items-center px-4 py-6 text-header-txt text-xl-dk">
        <div className="font-Rubik font-bold">
          <h1>Marv.Dev</h1>
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
    </header>
  );
}

export default Header;
