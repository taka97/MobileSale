import React from "react";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <Row>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 8, offset: 4 }}>
        <div style={{ fontSize: 14, fontWeight: 700 }}>Project Nineteen</div>
        <div>Mobile trading website</div>
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 8, offset: 4 }}>
        <div style={{ fontSize: 14, fontWeight: 700 }}>Nineteen members</div>
        <div>
          1512174 - Hồ Văn Hoàng
          <br />
          1612104 - Nguyễn Hữu Điền
          <br />
          1612310 - Nguyễn Đăng Khởi
          <br />
          1612586 - Trương Hoài Tâm
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
