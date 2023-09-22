/* eslint-disable jsx-a11y/anchor-is-valid */
import { Logo, Menu, Cancel } from "../../assets";
import { menuList } from "../../utils/menuList";
import { cartAndProfileIcon } from "../../assets";
import Image from "../Image";
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
            <Image src={Menu}/>
          </button>
        </div>
        <div className="header-left">
          <ul>
            <Image src={Logo} className={"logo"} />
            {menuList.map((item) => {
              return (
                <li>
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="menuDrawer">
          <button onClick={toggleMenu}>
            <Image id={"closeIcon"} src={Cancel} />
          </button>

          <ul>
            <div className="drawer-input-container">
              <input type="text" id="tab-search" placeholder="Search..." />
              <button type="button" id="button">
                Search
              </button>
            </div>
            {menuList.map((item) => {
              return (
                <li>
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
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
          {cartAndProfileIcon.map((item) => {
            return <Image id={"right"} className={"logo"} src={item} />;
          })}
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
