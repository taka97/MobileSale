import React, { useState } from "react";
import "antd/dist/antd.css";
import { Descriptions, Card } from 'antd'



const MethodSelection = () => {
	const [isActive, changeActive] = useState(false);
	const changeAddress = () => {
		changeActive(!isActive);
	}
	
	return (
		<div>
			<Card hoverable style={{ minWidth: 700, maxWidth: 1000, borderRadius: 10 }} onClick={changeAddress} className={isActive ? "active-address" : ""} >
				<Descriptions title="User Info">
					<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
					<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
					<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
					<Descriptions.Item label="Remark">empty</Descriptions.Item>
					<Descriptions.Item label="Address">
						No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
					</Descriptions.Item>
				</Descriptions>
			</Card>
			<div style={{ height: 30 }}>

			</div>
			<Card hoverable style={{ minWidth: 700, maxWidth: 1000, borderRadius: 10 }} onClick={changeAddress} className={!isActive ? "active-address" : ""} >
				<Descriptions title="User Info">
					<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
					<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
					<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
					<Descriptions.Item label="Remark">empty</Descriptions.Item>
					<Descriptions.Item label="Address">
						No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
					</Descriptions.Item>
				</Descriptions>
			</Card>
		</div>
	);
}

export default MethodSelection;