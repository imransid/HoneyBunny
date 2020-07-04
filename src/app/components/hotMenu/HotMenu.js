import React from "react";
import Banner from "../../elements/banner/Banner";

const HotMenu = props => {
  return (
    <div className="section">
      {/*  container  */}
      <div className="container">
        {/*  row  */}
        <div className="row">
          {/*  banner  */}
          <Banner
            name={"NewCollectionX"}
            path={"../../assets/img/banner10.jpg"}
          />

          {/*  /banner  */}
          {/*  banner  */}
          <Banner
            name={"NewCollectionXC"}
            path={"../../assets/img/banner11.jpg"}
          />

          {/*  /banner  */}
          {/*  banner  */}
          <Banner
            name={"NewCollectionYC"}
            path={"../../assets/img/banner12.jpg"}
          />

          {/*  /banner  */}
        </div>
        {/*  /row  */}
      </div>
      {/* 		 /container  */}
    </div>
  );
};

export default HotMenu;
