import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Select, Button, Modal } from "antd";
import Avatar from "./Avatar";
import { callApiRegister } from "../utils/apiCaller";

const { Option } = Select;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        return callApiRegister(values)
          .then(() => {
            const { history } = this.props;
            history.push("/login");
          })
          .catch(() => {
            const { info } = Modal;
            info({
              title: "Thông báo",
              content: `Đăng ký thất bại`
            });
          });
      }
      return err;
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "84"
    })(
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    );

    return (
      <div class="register-container-fluid">
        <div class="register-form-container container">
          <div class="center">
            <p className="title">ĐĂNG KÍ</p>
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              className="register-form"
            >
              <Avatar />
              <Form.Item label="Tên đăng nhập">
                {getFieldDecorator("username", {
                  rules: [
                    {
                      required: true,
                      message: "Mời bạn nhập username",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Mật khẩu" hasFeedback>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Mời bạn nhập mật khẩu"
                    },
                    {
                      validator: this.validateToNextPassword
                    }
                  ]
                })(<Input.Password />)}
              </Form.Item>
              <Form.Item label="Xác nhận mật khẩu" hasFeedback>
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Mời bạn nhập lại mật khẩu"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
              </Form.Item>
              <Form.Item label="Email">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "Email không đúng định dạng"
                    },
                    {
                      required: true,
                      message: "Mời bạn nhập email"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Tên đầy đủ">
                {getFieldDecorator("fullname", {
                  rules: [
                    {
                      required: true,
                      message: "Mời bạn nhập tên đầy đủ",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Số điện thoại">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Mời bạn nhập số điện thoại"
                    }
                  ]
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
              <br />
              <Button type="primary" htmlType="submit" className="form-button">
                Đăng kí
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const RegisterForm = Form.create({ name: "register" })(RegistrationForm);

export default RegisterForm;
