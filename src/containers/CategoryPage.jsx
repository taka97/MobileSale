import React from "react";
import { Card, Rate, Button } from "antd";

function HomePage() {
  return (
    <div>
      <div class="boundary">
        <h3 class="headline">Category</h3>
        <div class="center">
          <ul class="list-item">
            <li>
              <Card className="small-card container card">
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
              <Card className="small-card container card">
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
              <Card className="small-card container card">
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
              <Card className="small-card container card">
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
              <Card className="small-card container card">
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
              <Card className="small-card container card">
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
