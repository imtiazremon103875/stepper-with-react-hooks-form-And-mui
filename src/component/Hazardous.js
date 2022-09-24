import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Hazardous(props) {
  const { register, watch } = props;
  const Chemical = watch("Chemical");

  const yes28 = watch("yes28");

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography sx={{ marginRight: "420px", mt: 3, mb: 6 }}>
          Task Name - Hazardous / Dangerous Goods
        </Typography>
        <FormControl sx={{ marginRight: "550px", mt: 3 }}>
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Hazardous Elements</strong>
          </FormLabel>
          <RadioGroup
            sx={{ marginLeft: "45px", mt: 3 }}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Chemical"
              name="Chemical"
              id="Chemical"
              {...register("Chemical")}
              control={<Radio />}
              label="Generic Painting Chemical Products"
            />
            {Chemical && (
              <Box>
                <Typography
                  sx={{
                    // marginRight: "40px",
                    mt: 2,
                    mb: 2,
                    fontSize: "22px",
                  }}
                >
                  {" "}
                  Plant and Equipment
                </Typography>
                <Divider
                  sx={{
                    mt: 2,
                    mb: 2,
                  }}
                />
                <FormControl>
                  <Typography sx={{ mt: 1, fontSize: "14px" }} variant="p">
                    <strong>
                      Exposure to noise -
                      <span style={{ color: "red" }}>
                        Is it a risk at this site?
                      </span>
                    </strong>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "70px", mt: 3, mb: 2 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes28"
                      name="yes28"
                      id="yes28"
                      {...register("yes28")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      name="no"
                      id="no"
                      {...register("no")}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes28 && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      Use of hearing protection when operating noisy plant and
                      equipment - inline with manufacturers recommendations .
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ marginRight: "120px", mt: 3 }}
                    >
                      Inherent Risk Rating
                    </Typography>
                    <Box sx={{ width: 300 }}>
                      <Slider
                        sx={{ marginLeft: "30px", mt: 3, mb: 1 }}
                        aria-label="Temperature"
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={4}
                      />
                    </Box>
                    <Typography
                      variant="p"
                      sx={{ marginRight: "120px", mt: 3 }}
                    >
                      Residual Risk Rating
                    </Typography>
                    <Box sx={{ width: 300 }}>
                      <Slider
                        sx={{ marginLeft: "30px", mt: 3, mb: 1 }}
                        aria-label="Temperature"
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={4}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            )}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default Hazardous;
