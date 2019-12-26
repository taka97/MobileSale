import React from "react";
import { Card, Button, Tag, Tabs } from "antd";

const { TabPane } = Tabs;

const DetailPage = () => {
  return (
    <div class="boundary" style={{ backgroundColor: "transparent" }}>
      <div class="short-detail">
        <Card
          className="big-card container card"
          style={{ height: "auto", float: "left" }}
        >
          <div class="img-container">
            <img src="https://via.placeholder.com/150" alt="img" />
          </div>
          <div class="content">
            <ul class="img-group">
              <li>
                <img src="https://via.placeholder.com/90x90" alt="img" />
              </li>
              <li>
                <img src="https://via.placeholder.com/90x90" alt="img" />
              </li>
              <li>
                <img src="https://via.placeholder.com/90x90" alt="img" />
              </li>
            </ul>
          </div>
        </Card>
        <div class="summary-detail container">
          <div style={{ position: "relative" }}>
            <h3 style={{ fontSize: 24 }}>Name of product</h3>
            <span class="price">100,000vnd</span>
            <p style={{ marginTop: 12 }}>
              <b>Quick over review</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque ipsum ipsam hic necessitatibus vel, accusantium omnis
              iure a. Illo asperiores nisi ratione recusandae reiciendis
              blanditiis optio voluptates magnam expedita excepturi.
            </p>
            <div>
              <span style={{ marginRight: 12 }}>Color</span>
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </div>
            <div>
              <input
                type="number"
                name="amount"
                defaultValue="1"
                style={{ width: 50 }}
              />
              <Button className="card-button" style={{ marginLeft: 50 }}>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: 24, padding: 24 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Detail" key="1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            veritatis ullam molestias voluptatem quisquam cum perspiciatis
            inventore! Ex atque unde excepturi, placeat velit eos facere omnis,
            at ut explicabo dolorem sequi magni doloremque harum molestias
            temporibus sint ad error, ullam obcaecati fugit architecto?
            Accusamus, voluptate unde esse dolorum exercitationem a et quas rem,
            commodi eaque, reprehenderit omnis ut sit debitis temporibus
            adipisci labore eum molestias pariatur in dicta? Incidunt, aliquam.
            Nulla vel, blanditiis asperiores corporis nobis voluptatum
            perspiciatis vitae eius eligendi rerum veniam quibusdam explicabo
            animi, numquam perferendis repellat, pariatur aspernatur provident
            libero magnam aliquam. Voluptates deserunt hic provident
            reprehenderit.
          </TabPane>
          <TabPane tab="Comment" key="2">
            Comments will show here
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailPage;
