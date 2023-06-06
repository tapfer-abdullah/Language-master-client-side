import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

const CustomHemet = ({children}) => {
  return (
    <Fragment>
      <Helmet>
        <title>Language Master | {children}</title>
      </Helmet>
    </Fragment>
  );
};

export default CustomHemet;
