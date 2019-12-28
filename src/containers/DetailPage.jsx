import React, { useState } from "react";
import { Card, Button, Tag, Tabs, InputNumber } from "antd";
import { connect } from "react-redux";
import { add } from "../actions/cart";
import { numberWithCommas } from "../utils/helper";

const { TabPane } = Tabs;

const DetailPage = ({ detail, add }) => {
  const [bigImg, updateImg] = useState(detail.imgs[0]);
  const [number, updateAmount] = useState(1);

  const changeImg = e => {
    updateImg(e.target.src);
  };
  const changeAmount = value => {
    updateAmount(value);
  };

  const addToCart = () => {
    let product = {
      name: detail.name,
      price: detail.price,
      key: detail.key,
      number,
      amount: number * detail.price
    };
    add(product);
  };

  return (
    <div class="boundary" style={{ backgroundColor: "transparent" }}>
      <div class="short-detail">
        <Card
          className="big-card container card"
          style={{ height: "auto", float: "left" }}
        >
          <div class="img-container">
            <img src={bigImg} alt="img" />
          </div>
          <div class="content">
            <ul class="img-group">
              {detail.imgs.map((value, index) => (
                <li onClick={changeImg}>
                  <img src={value} alt="img" key={index} />
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <div class="summary-detail container">
          <div style={{ position: "relative" }}>
            <h3 style={{ fontSize: 24 }}>{detail.title}</h3>
            <span class="price">{numberWithCommas(detail.price)}₫</span>
            <p style={{ marginTop: 12 }}>
              <b>Review ngắn</b>
              <br />
              {detail.short}
            </p>
            <div>
              <span style={{ marginRight: 12 }}>Màu sắc</span>
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </div>
            <div style={{ marginTop: 24 }}>
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChange={value => changeAmount(value)}
              />
              <Button
                type="primary"
                style={{ marginLeft: 50 }}
                onClick={() => addToCart()}
              >
                Thêm vào giỏ
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: 24, padding: 24 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Chi tiết" key="1">
            <div>{detail.full}</div>
          </TabPane>
          <TabPane tab="Bình luận" key="2">
            Bình luận sẽ hiện thị ở đây
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    detail: state.products.detail
  }),
  { add }
)(DetailPage);
