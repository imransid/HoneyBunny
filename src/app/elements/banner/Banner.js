import React from "react";

const Banner = props => {
  return (
    <div className="col-md-4 col-sm-6">
      <a className="banner banner-1" href="#">
        <img src={props.path} alt="" />
        <div className="banner-caption text-center">
          <h2 className="white-color">{props.name}</h2>
        </div>
      </a>
    </div>
  );
};

export default Banner;
