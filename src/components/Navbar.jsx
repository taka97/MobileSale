import React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  actLoginRequest,
  actGetUser,
  actLogout,
  actCallbackLink
} from "../actions/Auth";
import { Button } from "antd";

const { SubMenu } = Menu;

class Navbar extends React.Component {
  render() {
    const { username, actLogout } = this.props;
    let login_logout, cart, register;
    if (username && username !== undefined) {
      login_logout = (
        <Menu.Item key="logout">
          <Button onClick={actLogout}>Logout</Button>
        </Menu.Item>
      );
      cart = (
        <Menu.Item key="cart">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
      );
    } else {
      login_logout = (
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      );
      register = (
        <Menu.Item key="register">
          <Link to="/register">Register</Link>
        </Menu.Item>
      );
    }
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
        <Menu.Item key="cart">
          <Link to="/cart">Giỏ hàng</Link>
        </Menu.Item>
        <Menu.Item key="payment">
          <Link to="/payment">Thanh toán</Link>
        </Menu.Item>

        {/* {cart}
        {login_logout}
        {register} */}

      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.username,
  usertoken: state.auth.usertoken,
  email: state.auth.email,
  phone: state.auth.phone,
  fullname: state.auth.fullname,
  avatar: state.auth.avatar,
  stratery: state.auth.stratery,

  err: state.auth.err,
  callbackLink: state.auth.callbackLink
});

const mapDispatchToProps = dispatch => ({
  actLoginRequest: user => dispatch(actLoginRequest(user)),
  actGetUser: () => dispatch(actGetUser()),
  actLogout: () => dispatch(actLogout()),
  actCallbackLink: link => dispatch(actCallbackLink(link))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
