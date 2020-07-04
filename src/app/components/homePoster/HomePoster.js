import React from "react";
import Slider from "react-slick";

const HomePoster = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div id="home">
      {/* container */}
      <div className="container">
        {/* home wrap */}
        <div className="home-wrap">
          {/* home slick */}
          <div id="home-slick">
            {/* banner */}
            <Slider {...settings}>
              <div className="banner banner-1">
                <img src="../../assets/img/banner01.jpg" alt="" />
                <div className="banner-caption text-center">
                  <h1>Bags sale</h1>
                  <h3 className="white-color font-weak">Up to 50% Discount</h3>
                  <button className="primary-btn">Shop Now</button>
                </div>
              </div>
              {/* /banner */}

              {/*  banner  */}
              <div className="banner banner-1">
                <img src="../../assets/img/banner02.jpg" alt="" />
                <div className="banner-caption">
                  <h1 className="primary-color">
                    HOT DEAL
                    <br />
                    <span className="white-color font-weak">Up to 50% OFF</span>
                  </h1>
                  <button className="primary-btn">Shop Now</button>
                </div>
              </div>
              {/*  /banner  */}

              {/*  banner  */}
              <div className="banner banner-1">
                <img src="../../assets/img/banner03.jpg" alt="" />
                <div className="banner-caption">
                  <h1 className="white-color">
                    New Product <span>Collection</span>
                  </h1>
                  <button className="primary-btn">Shop Now</button>
                </div>
              </div>
              {/*  /banner  */}
            </Slider>
          </div>
          {/*  /home slick */}
        </div>
        {/* /home wrap */}
      </div>
      {/* /container  */}
    </div>
  );
};

export default HomePoster;
