import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class Navbar extends React.Component {
  render() {
    return (
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper">Brand</span>}>
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="cart" disabled>
          Cart
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to="/register">Register</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
