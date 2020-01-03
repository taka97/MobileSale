import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Row, Col, Card, Divider } from "antd";
import { Link } from "react-router-dom";

import { incStep, decStep } from "../../actions/step";
import { numberWithCommas } from "../../utils/helper";
import { removeAll } from "../../actions/cart";
import { addOrder } from "../../actions/user";

const Confirmation = ({
  incStep,
  decStep,
  userInfo,
  products,
  removeAll,
  addOrder
}) => {
  const total_pre = products => {
    let total = 0;
    products.forEach(item => (total += item.price * item.number));
    return total;
  };
  const [total, updateTotal] = useState(0);
  const shipFee = 10000;

  if (products.length > 0 && total === 0) {
    updateTotal(total_pre(products));
  }

  const next = () => {
    incStep();
  };
  const back = () => {
    decStep();
  };

  return (
    <div className="mt-64 confirmation">
      <Row gutter={24} style={{ marginLeft: 0 }}>
        <Col sm={24} lg={16} className="no-padding">
          <Card className="card-summary container">
            {/* Received infomation */}
            <Row gutter={16}>
              <Col xs={0} sm={4} span={6}>
                <p className="uppercase">Nhận hàng</p>
              </Col>
              <Col span={18}>
                <p>
                  <span>{userInfo.name}</span>
                  <br />
                  <span>{userInfo.phone}</span>
                  <br />
                  <span>{userInfo.address}</span>
                </p>
              </Col>
            </Row>

            {/* Payment method */}
            <Row gutter={16}>
              <Col xs={0} sm={4} span={6}>
                <p className="uppercase">Phương thức</p>
              </Col>
              <Col span={18}>
                <p>
                  <span>{userInfo.paymentMethod}</span>
                </p>
              </Col>
            </Row>

            {/* Products */}
            <Row gutter={16}>
              <Col xs={0} sm={4} md={6} lg={6}>
                <p className="uppercase">Sản phẩm</p>
              </Col>
              <Col xs={24} sm={20} md={18} lg={18}>
                {products.map((value, index) => (
                  <Row gutter={16}>
                    <Col xs={12} sm={14} md={10} lg={10}>
                      <p>
                        <span>{value.name}</span>
                      </p>
                    </Col>
                    <Col xs={6} sm={4} md={4} lg={4}>
                      <p>
                        <span>{numberWithCommas(value.price)}₫</span>
                      </p>
                    </Col>
                    <Col offset={1} xs={2} sm={2} md={3} lg={3}>
                      <p>
                        <span>x{value.number}</span>
                      </p>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </Card>
        </Col>
        <Col
          sm={24}
          lg={6}
          className="summary container"
          style={{ padding: 12 }}
        >
          <p className="uppercase">Đơn hàng</p>
          <p className="number">{numberWithCommas(total)}₫</p>
          <p className="uppercase">Phí vận chuyển</p>
          <p className="number">{numberWithCommas(shipFee)}₫</p>
          <Divider />
          <p className="bold number">{numberWithCommas(shipFee + total)}₫</p>
          <Link to="/payment/complete">
            <Button
              type="primary"
              className="btn-confirm"
              onClick={() => {
                addOrder(userInfo, products);
                removeAll();
                next();
              }}
            >
              Xác nhận
            </Button>
          </Link>
        </Col>
      </Row>
      <Link to="/payment/select-method">
        <Button type="secondary" className="mt-24 mb-24" onClick={back}>
          Quay lại
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: {
      name: state.user.name,
      phone: state.user.phone,
      address: state.user.address[state.user.addressActiveIndex],
      paymentMethod: state.user.paymentMethod
    },
    products: state.cart.list
  };
};

export default connect(mapStateToProps, {
  incStep,
  decStep,
  removeAll,
  addOrder
})(Confirmation);
