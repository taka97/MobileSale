import React from "react";
import { connect } from "react-redux";
import { Button, Row, Col, Card, Divider } from "antd";
import { Link } from "react-router-dom";

import { incStep, decStep } from "../../actions/step";

const Confirmation = ({ incStep, decStep }) => {
  const next = () => {
    incStep();
  };
  const back = () => {
    decStep();
  };

  return (
    <div className="mt-64 confirmation">
      <Row gutter={24}>
        <Col span={18}>
          <Card className="card-summary container">
            {/* Received infomation */}
            <Row gutter={16}>
              <Col span={6}>
                <p className="uppercase">Nhận hàng</p>
              </Col>
              <Col span={18}>
                <p>
                  <span>Nguyễn Văn A</span>
                  <br />
                  <span>0929123456</span>
                  <br />
                  <span>227 Nguyễn Văn Cừ, P4, Q3</span>
                </p>
              </Col>
            </Row>

            {/* Payment method */}
            <Row gutter={16}>
              <Col span={6}>
                <p className="uppercase">Phương thức</p>
              </Col>
              <Col span={18}>
                <p>
                  <span>Thanh toán khi nhận hàng</span>
                </p>
              </Col>
            </Row>

            {/* Products */}
            <Row gutter={16}>
              <Col span={6}>
                <p className="uppercase">Sản phẩm</p>
              </Col>
              <Col span={10}>
                <p>
                  <span>Điện thoại 1</span>
                  <br />
                  <span>Điện thoại 2</span>
                </p>
              </Col>
              <Col span={4}>
                <p>
                  <span>1,000,000vnd</span>
                  <br />
                  <span>2,000,000vnd</span>
                </p>
              </Col>
              <Col span={4}>
                <p>
                  <span>x1</span>
                  <br />
                  <span>x2</span>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6} className="summary container" style={{ padding: 24 }}>
          <p className="uppercase">Đơn hàng</p>
          <p className="number">5,000,000vnd</p>
          <p className="uppercase">Phí vận chuyển</p>
          <p className="number">10,000vnd</p>
          <Divider />
          <p className="bold number">5,010,000vnd</p>
          <Link to="/payment/complete">
            <Button type="primary" className="btn-confirm" onClick={next}>
              Xác nhận
            </Button>
          </Link>
          <Link to="/payment/select-method">
            <Button
              type="secondary"
              className="btn-confirm mt-24"
              onClick={back}
            >
              Quay lại
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default connect(null, { incStep, decStep })(Confirmation);
