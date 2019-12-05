import React from "react";
import PaymentProcess from "../components/PaymentProcess";
import AddressSelection from "../components/AddressSelection";
import { Icon, Button } from 'antd';

const ButtonGroup = Button.Group;

const PaymentPage = () => {
  return (
    <div>
      <PaymentProcess></PaymentProcess>

      {/* next button */}
      <div>
        <ButtonGroup>
          <Button type="secondary">
            <Icon type="left" />
            Go back
          </Button>
          <Button type="primary">
            Go forward
            <Icon type="right" />
          </Button>
        </ButtonGroup>
      </div>

      <AddressSelection></AddressSelection>
    </div>
  )
}

export default PaymentPage;
