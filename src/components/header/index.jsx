/* eslint-disable jsx-a11y/anchor-is-valid */
import { Logo, Profile, Cart, Menu, Cancel } from "../../assets";

const Header = () => {
  const toggleMenu = () => {
    var menuDrawer = document.getElementById("menuDrawer");
    menuDrawer.classList.toggle("open");
  };

  return (
    <div>
      <div className="header-container">
        <div className="menu-container">
          <button onClick={toggleMenu}>
            <img src={Menu} alt="" />
          </button>
        </div>
        <div className="header-left">
          <ul>
            <img className="logo" src={Logo} alt="" />
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div id="menuDrawer">
          <button onClick={toggleMenu}>
            <img id="closeIcon" src={Cancel} alt="" />
          </button>

          <ul>
            <div className="drawer-input-container">
              <input type="text" id="tab-search" placeholder="Search..." />
              <button type="button" id="button">
                Search
              </button>
            </div>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="header-center">
          <div className="search-container">
            <input type="text" id="search" placeholder="Search..." />
            <button type="button" id="search-button">
              Search
            </button>
          </div>
        </div>
        <div className="header-right">
          <img id="right" className="logo" src={Cart} alt="" />
          <img id="right" className="logo" src={Profile} alt="" />
        </div>
      </div>
      <div className="medium-container">
        <input type="text" id="tab-search" placeholder="Search..." />
        <button type="button" id="search-button">
          Search
        </button>
      </div>
    </div>
  );
};
export default Header;
