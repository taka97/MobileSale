import React, { useState } from "react";
import { Icon, Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

import PaymentProcess from "../components/payment/Process";
import AddressSelection from "../components/payment/AddressSelection";
import Confirmation from "../components/payment/Confirmation";
import Completion from "../components/payment/Completion";
import MethodSelection from "../components/payment/MethodSelection";

const ButtonGroup = Button.Group;

const PaymentPage = () => {
  const urls = ["", "select-method", "confirm", "complete"];
  const [index, updateIndex] = useState(1);

  const increaseIndex = () => {
    console.log(index);
    if (index > 0 && index < 3) {
      updateIndex(index + 1);
    }
  };
  const decreaseIndex = () => {
    console.log(index);
    if (index > 1 && index < 4) {
      updateIndex(index - 1);
    }
  };

  let match = useRouteMatch();
  return (
    <div>
      <PaymentProcess></PaymentProcess>

      {/* next button */}
      <div>
        <ButtonGroup>
          <Link to={`${match.url}/${urls[index - 1]}`} onClick={decreaseIndex}>
            <Button type="secondary">
              <Icon type="left" />
              Go back
            </Button>
          </Link>
          <Link to={`${match.url}/${urls[index]}`} onClick={increaseIndex}>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </Link>
        </ButtonGroup>
      </div>

      <Switch>
        <Route path={`${match.path}/select-method`} component={MethodSelection} />
        <Route path={`${match.path}/confirm`} component={Confirmation} />
        <Route path={`${match.path}/complete`} component={Completion} />
        <Route path={`${match.path}/`} component={AddressSelection} />
      </Switch>
    </div>
  )
}

export default PaymentPage;
