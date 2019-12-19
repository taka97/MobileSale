import React from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox, Modal } from "antd";
import { Redirect, Link } from "react-router-dom";

import {
  actLoginRequest,
  actGetUser,
  actLogout,
  actCallbackLink
} from "../actions/Auth";

import "antd/dist/antd.css";
import "../index.css";
import "./style.css";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { actLoginRequest } = this.props;
        actLoginRequest(values);
      }
    });
  };

  render() {
    const { username, err, actGetUser, callbackLink } = this.props;
    const { getFieldDecorator } = this.props.form;
    actGetUser();

    if (username && username !== undefined) {
      if (callbackLink) return <Redirect to={callbackLink} />;
      return <Redirect to="/" />;
    }
    if (err === 400) {
      const { info } = Modal;
      info({
        title: "Thông báo",
        content: `Đăng nhập thất bại`
      });
    }

    return (
      <div class="login-container-fluid">
        <div class="login-form-container container">
          <div class="center">
            <p className="title">ĐĂNG NHẬP</p>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Mời bạn nhập tên đăng nhập" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Tên đăng nhập"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "Mời bạn nhập mật khẩu" }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Mật khẩu"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Ghi nhớ đăng nhập</Checkbox>)}
                <Link to="/forgot-password" className="login-form-forgot">
                  Quên mật khẩu
                </Link>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="form-button"
                >
                  Đăng nhập
                </Button>
                <br />
                Hoặc <Link to="/register">Đăng kí ngay</Link>
              </Form.Item>
            </Form>
          </div>
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

const LoginForm = Form.create({ name: "normal_login" })(NormalLoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
