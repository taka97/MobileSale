import React from "react";
import { connect } from "react-redux";
import { numberWithCommas } from "../utils/helper";

import { Table, InputNumber, Modal, Button } from "antd";

// modal
const { confirm } = Modal;

const CartList = ({ list }) => {
  const showConfirm = e => {
    confirm({
      title: "Do you want to delete these items?",
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        // delete index
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {}
    });
  };

  const updateAmount = e => {
    console.log(e);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index"
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Số lượng",
      dataIndex: "number",
      key: "number",
      render: number => (
        <InputNumber
          min={1}
          max={10}
          defaultValue={number}
          onChange={e => updateAmount(e)}
        />
      )
    },
    {
      title: "Tổng cộng",
      key: "amount",
      dataIndex: "amount",
      render: amount => `${numberWithCommas(amount)}₫`
    },
    {
      title: "Xử lí",
      dataIndex: "index",
      key: "none",
      render: index => (
        <Button type="danger" onClick={showConfirm} className="delete">
          Xóa
        </Button>
      )
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={list}
      pagination={false}
      className="container"
      onRow={(record, rowIndex) => {
        return {
          onClick: e => {
            let row =
              e.target.parentElement.parentElement.parentElement.parentElement
                .parentElement.parentElement;
            let index = row.getAttribute("data-row-key") - 1;
            console.log(list[index]);
          }
        };
      }}
    />
  );
};

export default connect(
  state => ({
    list: state.cart.list
  }),
  null
)(CartList);
