import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Process from "../components/payment/Process";
import AddressSelection from "../components/payment/AddressSelection";
import Confirmation from "../components/payment/Confirmation";
import Completion from "../components/payment/Completion";
import MethodSelection from "../components/payment/MethodSelection";

const PaymentPage = () => {

  let match = useRouteMatch();
  return (
    <div>
      <div className="payment-process mt-36 mb-36">
        <Process></Process>
      </div>

      {/* Setup router for payment */}
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
