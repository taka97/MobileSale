import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Redirect, Link } from "react-router-dom";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { username, err, actGetUser, callbackLink } = this.props;
    const { getFieldDecorator } = this.props.form;
    actGetUser();

    if (username && username !== "undefined") {
      if (callbackLink) return <Redirect to={callbackLink} />;
      return <Redirect to="/" />;
    }
    if (err === 400) {
      document.getElementById("msg").innerHTML = "Đăng nhập thất bại";
    }

    return (
      <div>
        <p className="title">LOGIN</p>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <p id="msg" style={{ color: "red" }} />
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <Link to="/forgot-password" className="login-form-forgot">
              Forgot password
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/register">Register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: "normal_login" })(NormalLoginForm);

export default LoginForm;
