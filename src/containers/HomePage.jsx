import React from "react";
import { Carousel, Card, Rate, Button } from "antd";
import { Link } from "react-router-dom";

function HomePage() {
  const carouselImgs = [
    "imgs/carousel-img-1.jpg",
    "imgs/carousel-img-2.jpg",
    "imgs/carousel-img-3.jpg"
  ];
  const products = [
    {
      img: "imgs/iphone-1.png",
      title: "iPhone 11 pro max 64GB",
      price: "33.990.000₫",
      rate: 3,
      link: "/detail"
    },
    {
      img: "imgs/samsung-1.png",
      title: "Samsung Galaxy Fold 512GB",
      price: "50.000.000₫",
      rate: 3,
      link: "/detail"
    },
    {
      img: "imgs/xiaomi-1.jpg",
      title: "Xiaomi mi alpha 512GB",
      price: "65.000.000₫",
      rate: 3,
      link: "/detail"
    },
    {
      img: "imgs/oppo-1.png",
      title: "Oppo reno 2 256GB",
      price: "14.990.000₫",
      rate: 3,
      link: "/detail"
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Title",
      price: "100,000vnd",
      rate: 3,
      link: "/detail"
    }
  ];

  return (
    <div>
      <Carousel autoplay className="my-carousel">
        {carouselImgs.map((value, index) => (
          <div>
            <img src={value} alt={index} key={index} />
          </div>
        ))}
      </Carousel>
      <div class="boundary">
        <h3 class="headline">Top sales</h3>
        <div class="center">
          <ul class="list-item">
            {products.map((value, index) => (
              <li key={index}>
                <Card className="big-card container card">
                  <div class="img-container">
                    <img src={value.img} alt="img" />
                  </div>
                  <div class="content">
                    <Link to={value.link} className="card-title">
                      {value.title}
                    </Link>
                    <Rate disabled defaultValue={value.rate} className="rate" />
                    <span class="price">{value.price}</span>
                    <Button type="primary" className="card-button">
                      <Link to={value.link}>View more</Link>
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
}

export default HomePage;
