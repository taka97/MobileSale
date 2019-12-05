import React from "react";
import "antd/dist/antd.css";

import { Steps } from 'antd';
const { Step } = Steps;

const PaymentProcess = () => (
  <Steps current={0}>
    <Step title="Chọn địa chỉ thanh toán" />
    <Step title="Chọn phương thức thanh toán" />
    <Step title="Xác nhận" />
    <Step title="Hoàn tất" />
  </Steps>
);

export default PaymentProcess;