import React from "react";
import "antd/dist/antd.css";

import { Table, InputNumber, Modal, Button } from 'antd';

// modal
const { confirm } = Modal;

function showConfirm(e) {
  confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      // delete index
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

// update number

const onChange = (value) => {
  console.log('changed', value);
}

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Đơn giá',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Số lượng',
    dataIndex: 'number',
    key: 'number',
    render: number => (
      <InputNumber min={1} max={10} defaultValue={number} onChange={onChange} />
    )
  },
  {
    title: 'Tổng cộng',
    key: 'amount',
    dataIndex: 'amount'
  },
  {
    title: 'Xử lí',
    dataIndex: 'index',
    key: 'none',
    render: index => (
      <Button type="danger" onClick={showConfirm}>Xóa</Button>
    )
  }
  
];

const data = [
  {
    key: '1',
    index: 1,
    name: 'Điện thoại 1',
    price: 1000000,
    number: 2,
    amount: 0
  },
  {
    key: '2',
    index: 2,
    name: 'Điện thoại 2',
    price: 2000000,
    number: 2,
    amount: 0
  },
  {
    key: '3',
    index: 3,
    name: 'Điện thoại 3',
    price: 3000000,
    number: 3,
    amount: 0
  },
];

const CartList = () => <Table columns={columns} dataSource={data} />;

export default CartList;