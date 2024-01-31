import React from "react";

function Header() {
  return (
    <header className="p-4">
      <div className="page-width">
        <div className="p-4">
          <span>MARV.DEV</span>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
