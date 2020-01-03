import React from "react";
import { Carousel, Card, Rate, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { numberWithCommas } from "../utils/helper";

import { getDetail } from "../actions/products";

const HomePage = ({ products, categories, getList, getDetail }) => {
  const carouselImgs = [
    "imgs/carousel-img-1.jpg",
    "imgs/carousel-img-2.jpg",
    "imgs/carousel-img-3.jpg"
  ];

  // wait to get categories first
  // if (products.length === 0 && categories.length >= 0) {
  //   getList();
  // }

  return (
    <div>
      <Carousel autoplay className="my-carousel">
        {carouselImgs.map((value, index) => (
          <div key={index}>
            <img src={value} alt={index} key={index} />
          </div>
        ))}
      </Carousel>
      <div className="boundary">
        <h3 className="headline">Sản phẩm bán chạy</h3>
        <div className="center">
          <ul className="list-item">
            {products.map((value, index) => (
              <li key={index}>
                <Card className="big-card container card">
                  <div className="img-container">
                    <img src={value.img} alt="img" />
                  </div>
                  <div className="content">
                    <Link
                      to="/detail"
                      onClick={() => getDetail(value.key)}
                      className="card-title"
                    >
                      {value.name}
                    </Link>
                    <Rate disabled defaultValue={value.rate} className="rate" />
                    <span className="price">
                      {numberWithCommas(value.price)}₫
                    </span>
                    <Button type="primary" className="card-button">
                      <Link to="/detail" onClick={() => getDetail(value.key)}>
                        Xem thêm
                      </Link>
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    products: state.products.list,
    categories: state.products.categories
  }),
  { getDetail }
)(HomePage);
