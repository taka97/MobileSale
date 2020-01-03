import React from "react";

const initState = {
  categories: ["Iphone", "Samsung", "Xiaomi", "Oppo", "Vsmart"],
  list: [
    {
      imgs: ["imgs/iphone-1.png", "imgs/iphone-2.jfif", "imgs/iphone-3.jfif"],
      img: "imgs/iphone-1.png",
      name: "iPhone 11 pro max 64GB",
      category: "Iphone",
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
      category: "Samsung",
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
      category: "Xiaomi",
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
      category: "Oppo",
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
      category: "Vsmart",
      name: "Vsmart live 64GB",
      price: 3790000,
      short:
        "Chiếc điện thoại tiên phong chiếm lĩnh thị trường Việt Nam của nhà làm Vsmart",
      full: (
        <div className="read-content">
          <h2>
            Vsmart Live là một chiếc smartphone với rất nhiều ưu điểm tới từ
            <a
              href="https://www.thegioididong.com/dtdd-vsmart"
              target="_blank"
              title="Tham khảo giá điện thoại smartphone Vsmart chính hãng"
            >
              Vsmart
            </a>
            và hứa hẹn sẽ làm thúc đẩy doanh số của hãng smartphone Việt này lên
            một tầm cao mới.
          </h2>
          <h3>Mẫu smartphone mạnh mẽ nhất từ trước đến nay của Vsmart</h3>
          <p>
            Vsmart Live sẽ là một sản phẩm rất đáng chú ý ở phân khúc tầm trung
            với con chip Snapdragon 675 kết hợp cùng 4 GB RAM và 64 GB bộ nhớ
            trong.
          </p>
          <p>
            <img
              alt="Điện thoại smartphone Vsmart Live | Giao diện Android"
              src="https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-tgdd-1.jpg"
              class="lazy"
              title="Điện thoại smartphone Vsmart Live | Giao diện Android"
            />
          </p>
          <p>
            Với những trang bị như vậy thì đây chính là chiếc smartphone có hiệu
            năng mạnh mẽ nhất từ trước tới nay mà Vsmart từng sản xuất.
          </p>
          <p>
            <img
              alt="Điện thoại smartphone Vsmart Live | Điểm hiệu năng Antutu"
              src="https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-tgdd-2-1.jpg"
              class="lazy"
              title="Điện thoại smartphone Vsmart Live | Điểm hiệu năng Antutu"
            />
          </p>
          <p>
            Bạn cũng có thể thoải mái sử dụng những ứng dụng nặng hiện nay mà
            máy vẫn hoạt động khá mượt mà và ổn định.
          </p>
          <p>
            Giao diện của máy cũng khá đơn giản và dễ sử dụng giúp người dùng dễ
            dàng làm quen ngay từ khi cầm máy.
          </p>
          <h3>Smartphone Vsmart đầu tiên có vân tay dưới màn hình</h3>
          <p>
            Khá đáng khen cho hãng smartphone Việt khi tích hợp cho chiếc máy
            tầm trung của mình cảm biến vân tay dưới màn hình.
          </p>
          <p>
            <a
              class="preventdefault"
              href="https://www.thegioididong.com/images/42/208847/vsmart-live-tgdd-8.jpg"
              onclick="return false;"
            >
              <img
                alt="Điện thoại smartphone Vsmart Live | Vân tay dưới màn hình"
                class="lazy"
                src="https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-tgdd-8.jpg"
                title="Điện thoại smartphone Vsmart Live | Vân tay dưới màn hình"
              />
            </a>
          </p>
          <p>
            Đây là công nghệ tiên tiến hiện nay và vốn dĩ chỉ xuất hiện trên
            những chiếc máy đắt tiền.
          </p>
          <p>
            Người dùng sẽ không phải hi sinh đi bất cứ bộ phận nào trên máy mà
            vẫn có thể sử dụng công nghệ cảm biến vân tay đặt phía trước như
            truyền thống.
          </p>
          <h3>Dung lượng pin thoải mái sử dụng</h3>
          <p>
            Một điểm đáng khen khác trên chiếc Vsmart Live chính là máy sở hữu
            cho mình viên pin có dung lượng khủng lên tới 4000 mAh.
          </p>
          <p>
            <img
              alt="Điện thoại smartphone Vsmart Live | Trải nghiệm lâu dài thoải mái"
              class="lazy"
              src="https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-tgdd-10.jpg"
              title="Điện thoại smartphone Vsmart Live | Trải nghiệm lâu dài thoải mái"
            />
          </p>
          <p>
            Với viên pin này thì bạn có thể sử dụng thoải mái cả một ngày dài và
            thậm chí qua tới ngày thứ hai với các tác vụ nhẹ hơn.
          </p>
        </div>
      ),
      rate: 3,
      key: 5
    }
  ],
  detail: []
};

export default function getProducts(state = initState, action) {
  switch (action.type) {
    case "REQUEST_CATEGORIES":
      return {
        ...state,
        isFetching: true
      };
    case "REQUEST_CATEGORIES_SUCCESS":
      return {
        ...state,
        isFetching: false,
        categories: action.payload.splice(0)
      };
    case "REQUEST_LIST":
      return { ...state, isFetching: true };
    case "REQUEST_LIST_SUCCESS":
      return { ...state, isFetching: false, list: action.payload.splice(0) };
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
