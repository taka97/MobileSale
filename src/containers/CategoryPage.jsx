import React from "react";
import { Card, Rate, Button } from "antd";
import { Link } from "react-router-dom";

function HomePage() {
  const products = [
    {
      img: "https://via.placeholder.com/150",
      title: "Title",
      price: "100,000vnd",
      rate: 3,
      link: "/detail"
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Title",
      price: "100,000vnd",
      rate: 3,
      link: "/detail"
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Title",
      price: "100,000vnd",
      rate: 3,
      link: "/detail"
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Title",
      price: "100,000vnd",
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
      <div class="boundary">
        <h3 class="headline">Category</h3>
        <div class="center">
          <ul class="list-item">
            {products.map((value, index) => (
              <li key={index}>
                <Card className="small-card container card">
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
