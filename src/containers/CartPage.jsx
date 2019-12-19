import React from "react";
import CartList from "../components/CartList";
import { Button } from "antd";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="boundary">
      <Button type="primary" className="pay-btn">
        <Link to="/payment">Thanh toán</Link>
      </Button>
      <CartList></CartList>
    </div>
  );
};

export default CartPage;
