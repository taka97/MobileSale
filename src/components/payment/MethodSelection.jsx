import React, { useState } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

import { incStep, decStep } from "../../actions/step";

const MethodSelection = ({ incStep, decStep }) => {
  const [isActive, changeActive] = useState(false);
  const changeAddress = () => {
    changeActive(!isActive);
  };

  const back = () => {
    decStep();
  };
  const next = () => {
    incStep();
  };

  return (
    <div>
      <div className="method-container mt-64">
        <Card
          title="ATM"
          hoverable
          onClick={changeAddress}
          className={`${
            isActive ? "active " : ""
          } card-atm inline-block mr-36 container`}
        ></Card>
        <Card
          title="Thanh toán khi nhận hàng"
          hoverable
          onClick={changeAddress}
          className={`${
            !isActive ? "active " : ""
          } card-atm inline-block container`}
        ></Card>
      </div>
      <div className="mt-48">
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

export default connect(null, { incStep, decStep })(MethodSelection);
