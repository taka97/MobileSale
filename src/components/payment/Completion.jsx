import React from 'react';
import { connect } from "react-redux";
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";

import { reset } from "../../actions/step";

const Completion = ({ reset }) => {
  const resetStep = () => {
    reset();
  };

  return (
      <Result
        status="success"
        title="Cảm ơn bạn đã mua hàng!"
        extra={[
          <Link to="/">
            <Button type="primary" key="console" onClick={resetStep}>
            Về trang chủ
          </Button>
          </Link>,
        ]}
      />
  );
};

export default connect(null, { reset })(Completion);