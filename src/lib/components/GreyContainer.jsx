import * as React from "react";
import { Container } from "@mui/material";

const sx = {
  boxShadow: "0",
  marginBottom: "40px",
  paddingBottom: "40px",
  paddingRight: "40px",
  paddingLeft: "40px",
  paddingTop: "40px",
  backgroundColor: "#F5F5F5",
  transition: "0.2s ease-in-out",
  "&:hover": {
    boxShadow: "11px 12px 0px 0px #B9DBF6",
  },
};
const GreyContainer = (props) => {
  return (
    <Container id="GreyContainer" sx={sx}>
      {props.children}
    </Container>
  );
};

export default GreyContainer;
