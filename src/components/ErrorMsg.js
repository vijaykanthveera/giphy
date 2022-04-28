import React from "react";

const ErrorMsg = ({ msg }) => {
  return <h2 style={{ color: "red" }} data-testid="errormsg">{msg}</h2>;
};

export default ErrorMsg;
