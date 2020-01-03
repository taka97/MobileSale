import React from "react";
import { connect } from "react-redux";
import { Descriptions, Card, Button } from "antd";
import { Link } from "react-router-dom";

import { incStep } from "../../actions/step";
import { updateActiveAddress } from "../../actions/user";

const AddressSelection = ({ incStep, generalInfo, updateActiveAddress }) => {
  const changeAddress = index => {
    updateActiveAddress(index);
  };

  const next = () => {
    incStep();
  };

  return (
    <div>
      <div className="address-list mt-36">
        {generalInfo.address.map((address, index) => (
          <Card
            hoverable
            onClick={() => changeAddress(index)}
            className={`${
              index === generalInfo.addressActiveIndex ? "active" : ""
            } address-card mg-auto container`}
          >
            <Descriptions>
              <Descriptions.Item>{generalInfo.name}</Descriptions.Item>
              <Descriptions.Item>{generalInfo.phone}</Descriptions.Item>
              <br />
              <Descriptions.Item>{address}</Descriptions.Item>
            </Descriptions>
          </Card>
        ))}
      </div>
      <div className="mt-36 mb-36">
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

export default connect(
  state => ({
    generalInfo: {
      name: state.user.name,
      phone: state.user.phone,
      address: state.user.address,
      addressActiveIndex: state.user.addressActiveIndex
    }
  }),
  { incStep, updateActiveAddress }
)(AddressSelection);
