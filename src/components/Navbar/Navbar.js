import { Menu, Button } from "antd";
import Link from "next/link";
import React, { Component } from "react";
import Img from "../../../public/img.png";

const NavBrandLogo = {
  display: "block",
  backgroundPositionX: "-176px",
  backgroundImage: `url(${Img})`,
  backgroundSize: "405px ,379px",
  backgroundRepeat: "no-repeat",
  height: "35px",
  width: "176px",
  textIndent: "-1000%",
};

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="Nav">
          <div className="Nav-menus">
            <div className="Nav-brand">
              <a style={NavBrandLogo} href="/"></a>
            </div>
            <div className="Nav-list-menu">
              <Menu
                style={{ borderBottom: "none" }}
                theme="light"
                mode="horizontal"
              >
                <Menu.Item key="1">
                  <Link href="/profile">
                    <a>Profile </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/logout">
                    <a>Logout</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </nav>
        <style jsx>
          {`
            i.Nav {
              background-color: #fff;
              border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
              position: fixed;
              top: 0;
              width: 100%;
              z-index: 2;
              -webkit-transition: height 0.2s ease-in-out;
              transition: height 0.2s ease-in-out;
              height: 77px;
            }
            .Nav-menus {
              display: flex;
              flex-direction: row;
              width: 70%;
              margin: 0 auto;
              padding: 26px 40px;
            }
            .Nav-list-menu {
              margin-left: 60%;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Navbar;
