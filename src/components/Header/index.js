import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Instagram
            </a>
          </div>
          <div className="Nav-list-menu">
            <Menu theme="light" mode="horizontal">
              <Menu.Item key="1">
                <Link to={"/profile"}>Profile</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={"/logout"}>Logout</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
