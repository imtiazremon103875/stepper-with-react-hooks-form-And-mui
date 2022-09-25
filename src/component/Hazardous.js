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

  const yes35 = watch("yes35");
  const yes36 = watch("yes36");

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
                    // marginRight: "30px",
                    mt: 2,
                    mb: 2,
                    fontSize: "22px",
                  }}
                >
                  {" "}
                  Generic Painting Chemical Product
                </Typography>
                <Divider
                  sx={{
                    mt: 2,
                    mb: 2,
                  }}
                />
                <FormControl>
                  <FormLabel
                    sx={{ mt: 2 }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    Chemical exposure -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </FormLabel>

                  <RadioGroup
                    sx={{ marginLeft: "65px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes35"
                      id="yes35"
                      {...register("yes35")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes35"
                      id="yes35"
                      {...register("yes35")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes35 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      {" "}
                      Ensure current and valid SDS available for all
                      dangerous/hazardous goods used. Ensure all PPE nominated
                      in the SDS is readily available for use the work area and
                      all air filters are in suitable condition
                    </Typography>
                    <Typography variant="p" sx={{ marginRight: "120px" }}>
                      <strong> Inherent Risk Rating</strong>
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

                    <Typography variant="p" sx={{ marginRight: "160px" }}>
                      <strong> Residual Risk</strong>
                    </Typography>
                    <Box sx={{ width: 300 }}>
                      <Slider
                        sx={{
                          marginLeft: "30px",
                          mt: 3,
                          mb: 1,
                        }}
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
                <FormControl>
                  <Typography sx={{ mt: 1 }} variant="p">
                    Contaminated Waste -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "67px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes36"
                      id="yes36"
                      {...register("yes36")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes36"
                      id="yes36"
                      {...register("yes36")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes36 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How will the hazards controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      Dispose of all contaminated wastes, using correct
                      procedures. Return unwanted paint to the office for
                      recycling or disposal
                    </Typography>
                    <Typography variant="p" sx={{ marginRight: "100px" }}>
                      <strong> Inherent Risk Rating</strong>
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
                    <Typography variant="p" sx={{ marginRight: "140px" }}>
                      <strong> Residual Risk</strong>
                    </Typography>
                    <Box sx={{ width: 300 }}>
                      <Slider
                        sx={{
                          marginLeft: "30px",
                          mt: 3,
                          mb: 1,
                        }}
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
