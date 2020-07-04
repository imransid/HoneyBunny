import React from "react";
import Slider from "react-slick";
import Product from "../../elements/product/Product";

const DealsOfTheDay = props => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="section">
      {/*  container  */}
      <div className="container">
        {/*  row  */}
        <div className="row">
          {/*  section-title  */}
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">Deals Of The Day</h2>
              <div className="pull-right">
                <div className="product-slick-dots-1 custom-dots"></div>
              </div>
            </div>
          </div>
          {/*  /section-title  */}

          {/*  banner  */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="banner banner-2">
              <img src="../../assets/img/banner14.jpg" alt="" />
              <div className="banner-caption">
                <h2 className="white-color">
                  NEW
                  <br />
                  COLLECTION
                </h2>
                <button className="primary-btn">Shop Now</button>
              </div>
            </div>
          </div>
          {/*  /banner  */}

          {/*  Product Slick  */}
          <div className="col-md-9 col-sm-6 col-xs-6">
            <div className="row">
              <Slider {...settings}>
                <div id="product-slick-1" className="product-slick">
                  {/*  Product Single  */}
                  <Product path={"../../assets/img/product01.jpg"} />
                  {/*  /Product Single  */}

                  {/*  Product Single  */}
                  <Product path={"../../assets/img/product07.jpg"} />
                  {/*  /Product Single  */}

                  {/*  Product Single  */}
                  <Product path={"../../assets/img/product06.jpg"} />
                  {/*  /Product Single  */}

                  {/*  Product Single  */}
                  <Product path={"../../assets/img/product08.jpg"} />
                  {/*  /Product Single  */}
                </div>
              </Slider>
            </div>
          </div>
          {/* /Product Slick */}
        </div>
        {/* /row  */}
      </div>
      {/*  /container  */}
    </div>
  );
};

export default DealsOfTheDay;
