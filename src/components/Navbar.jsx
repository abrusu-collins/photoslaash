import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
// import logo from "../assets/images/405_Square.png";
function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <img src="" alt="logo" />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="/offering">Single Image</a>
          </li>
          <li>
            <a href="/menu">Multiple Images</a>
          </li>
          <li>
            <a href="/about">Sponsor</a>
          </li>
        </ul>
        <div className="bar">
          {navOpen ? (
            <TfiClose
              color="black"
              size={30}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          ) : (
            <HiBars3BottomRight
              size={35}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          )}
        </div>
      </div>
      <ul className={navOpen ? "mobile-nav" : ""}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="/offering">Single Image</a>
        </li>
        <li>
          <a href="/menu">Multiple Images</a>
        </li>
        <li>
          <a href="/about">Sponsor</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;