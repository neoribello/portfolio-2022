import * as React from "react";
import { Box } from "@mui/material";

const sx = {
  boxShadow: "0",
  marginBottom: "40px",
  paddingBottom: "40px",
  backgroundColor: "#F5F5F5",
  transition: "0.2s ease-in-out",
  "&:hover": {
    boxShadow: "11px 12px 0px 0px #B9DBF6",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const GreyContainer = (props) => {
  return (
    <Box id="GreyContainer" sx={sx}>
      {props.children}
    </Box>
  );
};

export default GreyContainer;
