import React, { useState } from "react";
import { connect } from "react-redux";
import { Descriptions, Card, Button } from "antd";
import { Link } from "react-router-dom";

import { incStep } from "../../actions/step";

const AddressSelection = ({ incStep }) => {
  const [isActive, changeActive] = useState(false);
  const changeAddress = () => {
    changeActive(!isActive);
  };

  const next = () => {
    incStep();
  };

  return (
    <div>
      <div className="address-list mt-36">
        <Card
          hoverable
          onClick={changeAddress}
          className={`${
            isActive ? "active" : ""
          } address-card mg-auto container`}
        >
          <Descriptions>
            <Descriptions.Item>Nguyen Van A</Descriptions.Item>
            <Descriptions.Item>0929612345</Descriptions.Item>
            <br />
            <Descriptions.Item>227 Nguyen Van Cu, P4, Q3</Descriptions.Item>
          </Descriptions>
        </Card>
        <div style={{ height: 30 }}></div>
        <Card
          hoverable
          onClick={changeAddress}
          className={`${
            !isActive ? "active" : ""
          } address-card mg-auto container`}
        >
          <Descriptions>
            <Descriptions.Item>Nguyen Van A</Descriptions.Item>
            <Descriptions.Item>0929612345</Descriptions.Item>
            <br />
            <Descriptions.Item>227 Nguyen Van Cu, P4, Q3</Descriptions.Item>
          </Descriptions>
        </Card>
        <div style={{ height: 30 }}></div>
        <Button style={{ marginLeft: 50 }} shape="circle" icon="plus" />
      </div>
      <div className="mt-36">
        <div className="group-button-center">
          <Button className="mr-80" disabled>
            Quay lại
          </Button>
          <Link to="payment/select-method">
            <Button type="primary" onClick={next}>
              Tiếp tục
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { incStep })(AddressSelection);
