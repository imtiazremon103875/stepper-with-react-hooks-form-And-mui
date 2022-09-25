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

function Surface(props) {
  const { register, watch } = props;
  const Power = watch("Power");
  const Overhead = watch("Overhead");
  const Aluminium = watch("Aluminium");
  const Falling = watch("Falling");

  const yes24 = watch("yes24");
  const yes25 = watch("yes25");
  const yes26 = watch("yes26");
  const yes27 = watch("yes27");

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
        <Typography sx={{ marginRight: "400px", mt: 3, mb: 6 }}>
          Task Name: Surface Preparation including sanding
        </Typography>
        <FormControl sx={{ marginRight: "550px", mt: 3 }}>
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Hazardous Elements</strong>
          </FormLabel>
          <RadioGroup
            sx={{ marginLeft: "60px", mt: 3 }}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Power"
              name="Power"
              id="Power"
              {...register("Power")}
              control={<Radio />}
              label="Power Sources"
            />
            {Power && (
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
                  Power Sources, Tools
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
                      Electric shock injury -
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
                      value={true}
                      name="yes24"
                      id="yes24"
                      {...register("yes24")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes24"
                      id="yes24"
                      {...register("yes24")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes24 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        Identify all active power sources - remember that
                        despite electricity has been turned off at the property
                        does not turn of electricity on the street. Pre Start
                        check to ensure all electrical plant and equipment is in
                        good working order. If deemed non operational
                      </strong>
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
                        defaultValue={0}
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
                        defaultValue={0}
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
            <FormControlLabel
              value="Fire"
              name="Aluminium"
              id="Aluminium"
              {...register("Aluminium")}
              control={<Radio />}
              label="Aluminium / steel extension"
            />
            {Aluminium && (
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
                  Aluminium / steel extension roller
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
                      Electric shock injury -
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
                      value={true}
                      name="yes25"
                      id="yes25"
                      {...register("yes25")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes25"
                      id="yes25"
                      {...register("yes25")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes25 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        Pre start check to identify electrical hazards, prior to
                        use of aluminium/steel extension roller handles.
                      </strong>
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
                        defaultValue={0}
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
                        defaultValue={0}
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
            <FormControlLabel
              value="Overhead"
              name="Overhead"
              id="Overhead"
              {...register("Overhead")}
              control={<Radio />}
              label="Overhead Power Lines"
            />
            {Overhead && (
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
                  Overhead Power Lines
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
                      Electric shock injury -
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
                      value={true}
                      name="yes26"
                      id="yes26"
                      {...register("yes26")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes26"
                      id="yes26"
                      {...register("yes26")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes26 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        Check for overhead wires, power lines and electrical
                        installations prior to setting up work area to perform
                        scope of works. Pre start check before setting up access
                        equipment
                      </strong>
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
                        defaultValue={0}
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
                        defaultValue={0}
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
            <FormControlLabel
              value="Falling"
              name="Falling"
              id="Falling"
              {...register("Falling")}
              control={<Radio />}
              label="Falling objects"
            />
            {Falling && (
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
                  Falling objects
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
                      Serious head injuries -
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
                      value={true}
                      name="yes27"
                      id="yes27"
                      {...register("yes27")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes27"
                      id="yes27"
                      {...register("yes27")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes27 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        Avoid using tools when working from a ladder. If there
                        is a need to use tools on ladder - use lanyard to pass
                        tools to persons at height, minimize risk of equipment
                        falling from a height.
                      </strong>
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
                        defaultValue={0}
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
                        defaultValue={0}
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

export default Surface;
