import React from "react";

const initState = {
  list: [
    {
      imgs: ["imgs/iphone-1.png", "imgs/iphone-2.jfif", "imgs/iphone-3.jfif"],
      img: "imgs/iphone-1.png",
      name: "iPhone 11 pro max 64GB",
      price: 33990000,
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
            Lần đầu tiên chúng ta sẽ có một chiếc iPhone với 3 camera ở mặt sau
            và cả 3 camera này đều có độ phân giải là 12 MP. Chúng ta sẽ có một
            camera góc thường, một camera góc rộng và một camera tele đáp ứng
            đầy đủ nhu cầu chụp ảnh hàng ngày của người dùng.
          </p>
          <p>
            Một cải tiến nữa cũng rất đáng chú ý chính là chế độ Night Mode mới
            sẽ giúp bạn cải thiện rất nhiều chất lượng ảnh chụp đêm trên iPhone.
          </p>
          <img
            src="https://www.thegioididong.com/images/42/200533/iphone-11-pro-max-tgdd10.jpg"
            alt="img"
            style={{ width: "100%" }}
          ></img>
          <p>
            Tùy thuộc vào điều kiện môi trường bạn chụp mà iPhone sẽ đưa ra
            những thông số phù hợp để bạn có thể có cho mình được một bức ảnh
            ưng ý nhất. Chế độ chân dung không chỉ tốt hơn trong việc lấy nét
            vào đối tượng muốn chụp, mà còn hoạt động được ở khoảng cách 'bình
            thường' nhờ sự trợ giúp của cảm biến độ sâu.
          </p>
          <h3>Camera trước cũng mang lại sự khác biệt</h3>
          <p>
            Không chỉ có camera chính mà camera selfie trên iPhone 11 Pro Max
            cũng được cải thiện rất nhiều. Đầu tiên chúng ta có thể kể tới là độ
            phân giải giờ đây đã được nâng lên thành 12 MP thay vì 7 MP như trên
            thế hệ trước.
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
            slow motion (quay chậm) giúp bạn có được những video thú vị và vui
            vẻ với bạn bè.
          </p>
        </div>
      ),
      rate: 3,
      key: 1
    },
    {
      imgs: ["imgs/samsung-1.png"],
      img: "imgs/samsung-1.png",
      name: "Samsung Galaxy Fold 512GB",
      price: 50000000,
      short:
        "Chiếc điện thoại màn hình gập đầu tiên của Samsung, đánh dấu sự tiên phong cho một thế hệ mới",
      full: "Đang cập nhật",
      rate: 3,
      key: 2
    },
    {
      imgs: ["imgs/xiaomi-1.jpg"],
      img: "imgs/xiaomi-1.jpg",
      name: "Xiaomi mi mix alpha 512GB",
      price: 65000000,
      short:
        "Chiếc điện thoại với màn hình bao trọn cả 2 mặt của Xiaomi, đánh dấu sự đột phát mới",
      full: "Đang cập nhật",
      rate: 3,
      key: 3
    },
    {
      imgs: ["imgs/oppo-1.png"],
      img: "imgs/oppo-1.png",
      name: "Oppo reno 2 256GB",
      price: 14990000,
      short:
        "Sự mới lạ chưa bao giờ là hết đối với Oppo, với cơ chế ẩn hiện camera ấn tượng",
      full: "Đang cập nhật",
      rate: 3,
      key: 4
    },
    {
      imgs: ["imgs/vsmart-1.png"],
      img: "imgs/vsmart-1.png",
      name: "Vsmart live 64GB",
      price: 3790000,
      short:
        "Chiếc điện thoại tiên phong chiếm lĩnh thị trường Việt Nam của nhà làm Vsmart",
      full: "Đang cập nhật",
      rate: 3,
      key: 5
    }
  ]
};

export default function getProducts(state = initState, action) {
  switch (action.type) {
    case "GET_LIST":
      return state.list;
    case "GET_DETAIL": {
      return {
        ...state,
        detail: state.list.find(value => value.key === action.payload)
      };
    }
    default:
      return state;
  }
}
