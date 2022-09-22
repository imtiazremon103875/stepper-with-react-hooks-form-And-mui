import { Typography } from "@mui/material";
import React from "react";

function Completion(props) {
  const { activeStep } = props;
  console.log(activeStep);
  return (
    <div>
      <Typography>Completion</Typography>
    </div>
  );
}

export default Completion;
