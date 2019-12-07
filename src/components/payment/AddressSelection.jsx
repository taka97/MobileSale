import React, { useState } from "react";
import "antd/dist/antd.css";
import { Descriptions, Card, Button } from 'antd'
import { Link } from "react-router-dom";

const AddressSelection = () => {
	const [isActive, changeActive] = useState(false);
	const changeAddress = () => {
		changeActive(!isActive);
	}
	
	return (
		<div >
			<div className="address-list mt-36">
				<Card hoverable onClick={changeAddress} className={(isActive ? "active" : "") + " address-card" + " mg-auto"} >
					<Descriptions>
						<Descriptions.Item>Nguyen Van A</Descriptions.Item>
						<Descriptions.Item>0929612345</Descriptions.Item>
						<br />
						<Descriptions.Item>
							227 Nguyen Van Cu, P4, Q3
						</Descriptions.Item>
					</Descriptions>
				</Card>
				<div style={{ height: 30 }}></div>
				<Card hoverable onClick={changeAddress} className={(!isActive ? "active" : "") + " address-card" + " mg-auto"} >
					<Descriptions>
						<Descriptions.Item>Nguyen Van A</Descriptions.Item>
						<Descriptions.Item>0929612345</Descriptions.Item>
						<br />
						<Descriptions.Item>
							227 Nguyen Van Cu, P4, Q3
						</Descriptions.Item>
					</Descriptions>
				</Card>
				<div style={{ height: 30 }}></div>
				<Button style={{marginLeft: 50}} shape="circle" icon="plus" />
			</div>
			<div className="mt-36">
				<div className="group-button-center">
					<Button className="mr-80" disabled>Quay lại</Button>
					<Link to="payment/select-method">
						<Button type="primary">Tiếp tục</Button>
					</Link>

				</div>		
			</div>
		</div>
	);
}

export default AddressSelection;