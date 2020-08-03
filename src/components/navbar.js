import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";

const Navbar = () => {
  const { Header } = Layout;
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/home"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/about"}>About</Link>
        </Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
