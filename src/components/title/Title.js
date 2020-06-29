import React from "react";
import { Helmet } from "react-helmet";

// Custom Title Tag

const Title = props => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </>
  );
};

export default Title;
