import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Button } from 'antd'
import { Link } from "react-router-dom";



const MethodSelection = () => {
	const [isActive, changeActive] = useState(false);
	const changeAddress = () => {
		changeActive(!isActive);
	}
	
	return (
		<div>
			<div className="method-container mt-64">
				<Card title="ATM" hoverable onClick={changeAddress} className={(isActive ? "active " : "") + "card-atm " + "inline-block " + "mr-36"} >
				</Card>
				<Card title="Thanh toán khi nhận hàng" hoverable onClick={changeAddress} className={(!isActive ? "active " : "") + "card-atm " + "inline-block"} >
				</Card>
			</div>
			<div className="mt-48">
				<div className="group-button-center">
				<Link to="/payment">
					<Button className="mr-80">Quay lại</Button>
				</Link>
					<Link to="/payment/confirm">
						<Button type="primary">Tiếp tục</Button>
					</Link>
				</div>		
			</div>
		</div>
	);
}

export default MethodSelection;