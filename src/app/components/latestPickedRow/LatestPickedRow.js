import React from "react";
import Product from "../../elements/product/Product";

const LatestPickedRow = (props) => {
  return (
    <div className="row">
      {/*  section title  */}
      <div className="col-md-12">
        <div className="section-title">
          <h2 className="title">
            {props.name == "latest" ? "Latest Products" : "PICKED FOR YOU"}
          </h2>
        </div>
      </div>
      {/*  section title  */}

      {/*  Product Single  */}
      <Product path={"../../assets/img/product01.jpg"} />
      {/*  /Product Single  */}

      {/*  Product Single  */}
      <Product path={"../../assets/img/product02.jpg"} />
      {/*  /Product Single  */}

      {/*  Product Single  */}
      <Product path={"../../assets/img/product03.jpg"} />
      {/*  /Product Single  */}

      {/*  Product Single  */}
      <Product path={"../../assets/img/product04.jpg"} />
      {/*  /Product Single  */}
    </div>
  );
};

export default LatestPickedRow;
