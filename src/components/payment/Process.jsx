import React from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";

import { Steps } from "antd";
const { Step } = Steps;

const Process = ({ i }) => {
  console.log(i);
  return (
    <Steps current={i} className="container process">
      <Step title="Chọn địa chỉ thanh toán" />
      <Step title="Chọn phương thức thanh toán" />
      <Step title="Xác nhận" />
      <Step title="Hoàn tất" />
    </Steps>
  );
};

export default connect(state => ({ i: state.step.i }), null)(Process);
