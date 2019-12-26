import React from "react";

import { Table, Card, Input, Button } from "antd";

const columns = [
  {
    title: "#",
    dataIndex: "index",
    key: "index"
  },
  {
    title: "username",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Phone",
    key: "phone",
    dataIndex: "phone"
  },
  {
    title: "Actions",
    dataIndex: "none",
    key: "action",
    render: () => (
      <div>
        <Button type="secondary" size="small">
          View
        </Button>
        <Button type="danger" className="ml-16" size="small">
          Delete
        </Button>
      </div>
    )
  }
];

const data = [
  {
    key: "1",
    index: "1",
    username: "nva",
    name: "Nguyễn Văn A",
    email: "nva@gmail.com",
    phone: "0966123567",
    id: "201123452",
    location: "227 Nguyễn Văn Cừ, p4 quận 3 tp Hồ Chí Minh"
  },
  {
    key: "2",
    index: "1",
    username: "nvb",
    name: "Nguyễn Văn B",
    email: "nvb@gmail.com",
    phone: "0966123568",
    id: "201123453",
    location: "227 Nguyễn Văn Cừ, p4 quận 3 tp Hồ Chí Minh"
  },
  {
    key: "3",
    index: "1",
    username: "nvc",
    name: "Nguyễn Văn C",
    email: "nvC@gmail.com",
    phone: "0966123569",
    id: "201123455",
    location: "227 Nguyễn Văn Cừ, p4 quận 3 tp Hồ Chí Minh"
  }
];

const TablePersonnel = () => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="container table-detail__main"
      />
    </div>
  );
};

export default TablePersonnel;
