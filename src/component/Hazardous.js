import { Typography } from "@mui/material";
import React from "react";

function Hazardous(props) {
  const { activeStep } = props;
  console.log(activeStep);
  return (
    <div>
      <Typography>Hazardous Goods</Typography>
    </div>
  );
}

export default Hazardous;
