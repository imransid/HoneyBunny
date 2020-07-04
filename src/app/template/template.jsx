import React, { useEffect } from "react";
import Title from "../components/title/Title";
import TopHeader from "../components/topHeader/TopHeader";
import Header from "../components/header/Header";
import NavigationBar from "../components/navigationBar/NavigationBar";
import HomePoster from "../components/homePoster/HomePoster";
import Footer from "../components/footer/Footer";
import DealsOfTheDay from "../components/dealsOfTheDay/DealsOfTheDay";
import HotMenu from "../components/hotMenu/HotMenu";
import LatestPickedRow from "../components/latestPickedRow/LatestPickedRow";

const App = (props) => {
  useEffect(() => {
    console.log("okokokok");
  }, []);

  const title = "Honey Bunny";
  return (
    <div>
      {/* Dynamic head Tag Title */}
      <Title title={title} />
      {/* HEADER  */}
      <header>
        {/*  top Header  */}
        <TopHeader title={title} />
        {/*  /top Header */}

        {/* header  */}
        <Header />

        {/*  container */}
      </header>
      {/* HEADER */}

      {/* NAVIGATION  */}
      <NavigationBar />
      {/*  /NAVIGATION  */}

      {/*  HOME  */}
      <HomePoster />
      {/* /HOME  */}

      {/*  section  */}

      <HotMenu />

      {/*  /section  */}

      {/*  section  */}
      <DealsOfTheDay />
      {/*  /section  */}

      {/* section */}
      <div className="section section-grey">
        {/* container  */}
        <div className="container">
          {/*  row  */}
          <div className="row">
            {/*  banner  */}
            <div className="col-md-8">
              <div className="banner banner-1">
                <img src="../assets/img/banner13.jpg" alt="" />
                <div className="banner-caption text-center">
                  <h1 className="primary-color">
                    HOT DEAL
                    <br />
                    <span className="white-color font-weak">Up to 50% OFF</span>
                  </h1>
                  <button className="primary-btn">Shop Now</button>
                </div>
              </div>
            </div>
            {/*  /banner */}

            {/*  banner  */}
            <div className="col-md-4 col-sm-6">
              <a className="banner banner-1" href="#">
                <img src="../assets/img/banner11.jpg" alt="" />
                <div className="banner-caption text-center">
                  <h2 className="white-color">NEW COLLECTION</h2>
                </div>
              </a>
            </div>
            {/*  /banner  */}

            {/*  banner */}
            <div className="col-md-4 col-sm-6">
              <a className="banner banner-1" href="#">
                <img src="../assets/img/banner12.jpg" alt="" />
                <div className="banner-caption text-center">
                  <h2 className="white-color">NEW COLLECTION</h2>
                </div>
              </a>
            </div>
            {/*  /banner  */}
          </div>
          {/*  /row  */}
        </div>
        {/*  /container  */}
      </div>
      {/*  /section  */}

      {/*  */}

      {/* s section  */}
      <div className="section">
        {/*  container  */}
        <div className="container">
          {/*  row  */}
          <LatestPickedRow name={"latest"} />
          {/*  /row  */}

          {/*  row  */}
          <LatestPickedRow name={"picked"} />
          {/*  /row  */}
        </div>
        {/*  /container  */}
      </div>
      {/*  /section  */}

      {/*  */}

      {/*  FOOTER  */}
      <Footer />
      {/*  /FOOTER  */}
    </div>
  );
};

export default App;
