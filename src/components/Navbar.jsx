import React from "react";
import { connect } from "react-redux";
import { Menu, Icon, Input } from "antd";
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
          <Button onClick={actLogout}>Đăng xuất</Button>
        </Menu.Item>
      );
      cart = (
        <Menu.Item key="cart">
          <Link to="/cart">Giỏ hàng</Link>
        </Menu.Item>
      );
    } else {
      login_logout = (
        <Menu.Item key="login">
          <Link to="/login">Đăng nhập</Link>
        </Menu.Item>
      );
      register = (
        <Menu.Item key="register">
          <Link to="/register">Đăng kí</Link>
        </Menu.Item>
      );
    }
    return (
      <div className="navbar">
        {/* First floor */}
        <div>
          <Menu
            mode="horizontal"
            theme="dark"
            className="float-right transparent"
          >
            <Menu.Item key="login">
              <Link to="/login">Đăng nhập</Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link to="/register">Đăng kí</Link>
            </Menu.Item>
            <Menu.Item key="payment">
              <Link to="/payment">Thanh toán (temp)</Link>
            </Menu.Item>
            <Menu.Item key="admin">
              <Link to="/admin">Admin (temp)</Link>
            </Menu.Item>
          </Menu>
        </div>

        {/* Second floor */}
        <div className="second-floor">
          <Menu
            id="myHeader"
            className="category transparent"
            mode="horizontal"
            theme="dark"
            style={{ zIndex: 1, width: "100%" }}
          >
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="menu" />
                  <span className="auto-hide">Danh mục</span>
                </span>
              }
            >
              <Menu.Item key="iphone">
                <Link to="/category">Iphone</Link>
              </Menu.Item>
              <Menu.Item key="samsung">Samsung</Menu.Item>
              <Menu.Item key="xiaomi">Xiaomi</Menu.Item>
              <Menu.Item key="oppo">Oppo</Menu.Item>
              <Menu.Item key="vsmart">Vsmart</Menu.Item>
            </SubMenu>
            <Link to="/">
              <Icon type="home" className="logo" />
            </Link>
            <Link to="/cart">
              <Icon type="shopping" className="cart cart-2" />
            </Link>
            <Input
              className="search"
              addonAfter={<Icon type="search" className="search-button" />}
              placeholder="Type your keyword"
            />
            <Link to="/cart">
              <Icon type="shopping" className="cart cart-1" />
            </Link>
          </Menu>
        </div>
      </div>
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
