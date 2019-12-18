import React from "react";
import "antd/dist/antd.css";
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
          Ndk
          <br />
          ...
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
