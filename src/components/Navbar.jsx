import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { MdHideImage } from "react-icons/md";
import Link from "next/link";
function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <MdHideImage size={35} />
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/single">Single Image</Link>
          </li>
          <li>
            <Link href="/multiple">Multiple Images</Link>
          </li>
          <li>
            <Link href="">Sponsor</Link>
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
            <HiBars3
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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/single">Single Image</Link>
        </li>
        <li>
          <Link href="/multiple">Multiple Images</Link>
        </li>
        <li>
          <Link href="">Sponsor</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
