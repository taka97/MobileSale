import React, { useState } from "react";
import { Card, Button, Tag, Tabs, InputNumber } from "antd";

const { TabPane } = Tabs;

const DetailPage = () => {
  const detail = {
    title: "iPhone 11 pro max 64GB",
    imgs: ["imgs/iphone-1.png", "imgs/iphone-2.jfif", "imgs/iphone-3.jfif"],
    price: "33.990.000₫",
    short:
      "Trong năm 2019 thì chiếc smartphone được nhiều người mong muốn sở hữu trên tay và sử dụng nhất không ai khác chính là iPhone 11 Pro Max 64GB tới từ nhà Apple",
    full: (
      <div className="read-content">
        <h3>Camera được cải tiến mạnh mẽ</h3>
        <p>
          Chắc chắn lý do lớn nhất mà bạn muốn nâng cấp lên iPhone 11 Pro Max
          chính là cụm camera mới được Apple nâng cấp rất nhiều.
        </p>
        <img
          src="https://www.thegioididong.com/images/42/200533/iphone-11-pro-max-6.jpg"
          alt="img"
          style={{ width: "100%" }}
        ></img>
        <p>
          Lần đầu tiên chúng ta sẽ có một chiếc iPhone với 3 camera ở mặt sau và
          cả 3 camera này đều có độ phân giải là 12 MP. Chúng ta sẽ có một
          camera góc thường, một camera góc rộng và một camera tele đáp ứng đầy
          đủ nhu cầu chụp ảnh hàng ngày của người dùng.
        </p>
        <p>
          Một cải tiến nữa cũng rất đáng chú ý chính là chế độ Night Mode mới sẽ
          giúp bạn cải thiện rất nhiều chất lượng ảnh chụp đêm trên iPhone.
        </p>
        <img
          src="https://www.thegioididong.com/images/42/200533/iphone-11-pro-max-tgdd10.jpg"
          alt="img"
          style={{ width: "100%" }}
        ></img>
        <p>
          Tùy thuộc vào điều kiện môi trường bạn chụp mà iPhone sẽ đưa ra những
          thông số phù hợp để bạn có thể có cho mình được một bức ảnh ưng ý
          nhất. Chế độ chân dung không chỉ tốt hơn trong việc lấy nét vào đối
          tượng muốn chụp, mà còn hoạt động được ở khoảng cách 'bình thường' nhờ
          sự trợ giúp của cảm biến độ sâu.
        </p>
        <h3>Camera trước cũng mang lại sự khác biệt</h3>
        <p>
          Không chỉ có camera chính mà camera selfie trên iPhone 11 Pro Max cũng
          được cải thiện rất nhiều. Đầu tiên chúng ta có thể kể tới là độ phân
          giải giờ đây đã được nâng lên thành 12 MP thay vì 7 MP như trên thế hệ
          trước.
        </p>
        <img
          src="https://www.thegioididong.com/images/42/200533/iphone-11-pro-max-19.jpg"
          alt="img"
          style={{ width: "100%" }}
        ></img>
        <p>
          Tiếp theo chúng ta sẽ có công nghệ quay video độ phân giải 4K ngay
          trên camera trước một điều mà những chiếc iPhone trước đây chưa thể
          làm được. Ngoài ra bạn cũng có thể dùng camera trước để quay video
          slow motion (quay chậm) giúp bạn có được những video thú vị và vui vẻ
          với bạn bè.
        </p>
      </div>
    )
  };

  const [bigImg, updateImg] = useState(detail.imgs[0]);
  const changeImg = e => {
    updateImg(e.target.src);
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
            <span class="price">{detail.price}</span>
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
              <InputNumber min={1} max={10} defaultValue={1} />
              <Button type="primary" style={{ marginLeft: 50 }}>
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

export default DetailPage;
