import React from "react";
import { connect } from "react-redux";
import CartList from "../components/CartList";
import { Button } from "antd";
import { Link, Redirect } from "react-router-dom";

const CartPage = ({ userId }) => {
  if (userId === null || userId === undefined) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <div className="boundary">
      <Button type="primary" className="pay-btn">
        <Link to="/payment">Thanh toán</Link>
      </Button>
      <CartList></CartList>
    </div>
  );
};

export default connect(
  state => ({ userId: state.auth.userId }),
  null
)(CartPage);
