import React from "react";
import { Carousel } from "antd";

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
    </div>
  );
}

export default HomePage;
