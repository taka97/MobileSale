import React from "react";
import { Menu, Icon, Button } from "antd";

class SliderBar extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div
        className="sliderbar"
        style={{ width: this.state.collapsed ? 80 : 217 }}
      >
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
        <div className="avatar">
          <div className="avatar__img">
            <img src="https://via.placeholder.com/90x90" alt="avatar" />
          </div>
          <div
            className="avatar__text"
            style={{ display: this.state.collapsed ? "none" : "block" }}
          >
            <p>Admin name</p>
          </div>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          className="menu"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Manage staffs</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span>Manage customers</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="appstore" />
            <span>Manage categories</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="hdd" />
            <span>Manage products</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SliderBar;
