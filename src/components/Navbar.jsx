import React from "react";
import { connect } from "react-redux";
import { Menu, Icon, Input } from "antd";
import { Link } from "react-router-dom";
import {
  actLoginRequest,
  actGetLocalUser,
  actLogout,
  actCallbackLink
} from "../actions/Auth";
import { getCategories } from "../actions/products";

const { SubMenu } = Menu;

class Navbar extends React.Component {
  render() {
    const { categories, actGetLocalUser } = this.props;
    let { userId } = this.props;
    const { actLogout } = this.props;

    if (userId === undefined) {
      actGetLocalUser();
    }

    let login_logout, register;
    if (userId !== null) {
      login_logout = (
        <Menu.Item key="logout">
          <Link to="/" onClick={actLogout}>
            Đăng xuất
          </Link>
        </Menu.Item>
      );
      register = "";
    } else {
      // didn't login
      actLogout();
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
            {login_logout}
            {register}
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
              {categories.map(value => (
                <Menu.Item key={value}>
                  <Link to={`/category/${value}`}>{value}</Link>
                </Menu.Item>
              ))}
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
  userId: state.auth.userId,
  accessToken: state.auth.accessToken,

  err: state.auth.err,
  callbackLink: state.auth.callbackLink,
  categories: state.products.categories
});

const mapDispatchToProps = dispatch => ({
  actLoginRequest: user => dispatch(actLoginRequest(user)),
  actGetLocalUser: () => dispatch(actGetLocalUser()),
  actLogout: () => dispatch(actLogout()),
  actCallbackLink: link => dispatch(actCallbackLink(link)),
  getCategories: () => dispatch(getCategories)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
