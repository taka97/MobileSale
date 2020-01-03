import React from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

import { incStep, decStep } from "../../actions/step";
import { updatePaymentMethod } from "../../actions/user";

const MethodSelection = ({
  incStep,
  decStep,
  updatePaymentMethod,
  paymentMethod
}) => {
  const changePayment = method => {
    updatePaymentMethod(method);
  };

  const paymentMethods = ["ATM", "Thanh toán khi nhận hàng"];

  const back = () => {
    decStep();
  };
  const next = () => {
    incStep();
  };

  return (
    <div>
      <Row type="flex" justify="center" align="middle" gutter={24}>
        {paymentMethods.map((value, index) => (
          <Col sm={24} md={8}>
            <Card
              title={value}
              hoverable
              onClick={() => changePayment(value)}
              className={`${
                value === paymentMethod ? "active " : ""
              } card-atm inline-block container mb-24`}
            ></Card>
          </Col>
        ))}
      </Row>
      <div className="mt-36 mb-36">
        <div className="group-button-center">
          <Link to="/payment">
            <Button className="mr-80" onClick={back}>
              Quay lại
            </Button>
          </Link>
          <Link to="/payment/confirm">
            <Button type="primary" onClick={next}>
              Tiếp tục
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(state => ({ paymentMethod: state.user.paymentMethod }), {
  incStep,
  decStep,
  updatePaymentMethod
})(MethodSelection);
