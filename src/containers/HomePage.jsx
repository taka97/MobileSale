import React from "react";
import { Carousel, Card, Rate, Button } from "antd";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Carousel autoplay style={{ maxWidth: 900, margin: "auto" }}>
        <div>
          <img src="imgs/carousel-img-2.jpg" alt="carousel-2" width="100%" />
        </div>
        <div>
          <img src="imgs/carousel-img-3.jfif" alt="carousel-3" width="100%" />
        </div>
        <div>
          <img src="imgs/carousel-img-4.webp" alt="carousel-4" width="100%" />
        </div>
      </Carousel>
      <div class="boundary">
        <h3 class="headline">Top sales</h3>
        <div class="center">
          <ul class="list-item">
            <li>
              <Card className="big-card container card">
                <div class="img-container">
                  <img src="https://via.placeholder.com/150" alt="img" />
                </div>
                <div class="content">
                  <a class="card-title" href="/detail">
                    Title
                  </a>
                  <Rate disabled defaultValue={2} className="rate" />
                  <span class="price">100,000vnd</span>
                  <Button className="card-button">
                    <Link to="/detail">View more</Link>
                  </Button>
                </div>
              </Card>
            </li>
            <li>
              <Card className="big-card container card">
                <div class="img-container">
                  <img src="https://via.placeholder.com/150" alt="img" />
                </div>
                <div class="content">
                  <a class="card-title" href="/detail">
                    Title
                  </a>
                  <Rate disabled defaultValue={2} className="rate" />
                  <span class="price">100,000vnd</span>
                  <Button className="card-button">View more</Button>
                </div>
              </Card>
            </li>
            <li>
              <Card className="big-card container card">
                <div class="img-container">
                  <img src="https://via.placeholder.com/150" alt="img" />
                </div>
                <div class="content">
                  <a class="card-title" href="/detail">
                    Title
                  </a>
                  <Rate disabled defaultValue={2} className="rate" />
                  <span class="price">100,000vnd</span>
                  <Button className="card-button">View more</Button>
                </div>
              </Card>
            </li>
            <li>
              <Card className="big-card container card">
                <div class="img-container">
                  <img src="https://via.placeholder.com/150" alt="img" />
                </div>
                <div class="content">
                  <a class="card-title" href="/detail">
                    Title
                  </a>
                  <Rate disabled defaultValue={2} className="rate" />
                  <span class="price">100,000vnd</span>
                  <Button className="card-button">View more</Button>
                </div>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
