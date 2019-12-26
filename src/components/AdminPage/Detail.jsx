import React, { useState } from "react";
import { Button, Card, Input } from "antd";

const Detail = () => {
  const [adjusted, adjust] = useState(false);
  const adjustContent = () => {
    adjust(!adjusted);
  };
  return (
    <div className="table-detail__sub">
      <Card className="container">
        <Button
          onClick={adjustContent}
          type="secondary"
          size="small"
          className="float-right"
        >
          Adjust
        </Button>
        <div className="avatar">
          <img src="https://via.placeholder.com/90x90" alt="avatar" />
        </div>
        <div className={`detail ${adjusted ? "adjusted" : ""}`}>
          <Input placeholder="Username" />
          <Input placeholder="Full name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Phone" />
          <Input placeholder="ID card" />
          <Input placeholder="Location" />
        </div>
        <div className={`btn-group ${adjusted ? "" : "hide"}`}>
          <Button type="secondary">Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
        <div className={`btn-group ${adjusted ? "hide" : ""}`}>
          <Button type="secondary">Close</Button>
        </div>
      </Card>
    </div>
  );
};

export default Detail;
