import React from "react";
import { Form, Input, Select, Button, Modal, DatePicker } from "antd";
import { callApiRegister } from "../utils/apiCaller";

const { Option } = Select;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    birthdate: ""
  };
  onChange = (date, dateString) => {
    this.setState({ birthdate: dateString });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      values.birthDate = this.state.birthdate;
      if (!err) {
        return callApiRegister(values)
          .then(() => {
            const { history } = this.props;
            history.push("/login");
          })
          .catch(error => {
            const { info } = Modal;
            info({
              title: "Đăng ký thất bại",
              content: error.response.data.message
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
      callback("Nhập lại mật khẩu không đúng!");
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

  handleChange = value => {
    console.log(`selected ${value}`);
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

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "84"
    })(
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    );

    return (
      <div className="register-container-fluid">
        <div className="register-form-container container">
          <div className="center">
            <p className="title">ĐĂNG KÍ</p>
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              className="register-form"
            >
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
              <Form.Item label="Giới tính" style={{ textAlign: "left" }}>
                {getFieldDecorator("sex", {
                  rules: [
                    {
                      required: true,
                      message: "Mời bạn chọn giới tính",
                      whitespace: true
                    }
                  ]
                })(
                  <Select onChange={this.handleChange} style={{ width: 100 }}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                )}
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
              <Form.Item label="Ngày sinh" style={{ textAlign: "left" }}>
                {getFieldDecorator("birthDate", {
                  rules: [
                    {
                      required: true,
                      message: "Mời bạn chọn ngày sinh"
                    }
                  ]
                })(<DatePicker onChange={this.onChange} />)}
              </Form.Item>
              <Form.Item label="Địa chỉ">
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "Mời bạn nhập địa chỉ",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
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
