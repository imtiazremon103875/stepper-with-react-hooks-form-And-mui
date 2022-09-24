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
function ELcetrical(props) {
  const { register, watch } = props;
  const Source = watch("Source");
  const Lines = watch("Lines");
  const extension = watch("extension");

  const yes29 = watch("yes29");
  const yes30 = watch("yes30");
  const yes31 = watch("yes31");

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
        <Typography sx={{ marginRight: "600px", mt: 3, mb: 6 }}>
          Task Name: Electrical
        </Typography>
        <FormControl sx={{ marginRight: "600px", mt: 3 }}>
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Hazardous Elements</strong>
          </FormLabel>
          <RadioGroup
            sx={{ marginLeft: "60px", mt: 3 }}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Source"
              name="Source"
              id="Source"
              {...register("Source")}
              control={<Radio />}
              label="Power Sources And Tools"
            />
            {Source && (
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
                      name="yes29"
                      id="yes29"
                      {...register("yes29")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes29"
                      id="yes29"
                      {...register("yes29")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes29 === "true" && (
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
            <FormControlLabel
              value="extension"
              name="extension"
              id="extension"
              {...register("extension")}
              control={<Radio />}
              label="Aluminium  extension"
            />
            {extension && (
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
                      name="yes30"
                      id="yes30"
                      {...register("yes30")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes30"
                      id="yes30"
                      {...register("yes30")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes30 === "true" && (
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
            <FormControlLabel
              value="Lines"
              name="Lines"
              id="Lines"
              {...register("Lines")}
              control={<Radio />}
              label="Overhead Power Lines"
            />
            {Lines && (
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
                      name="yes31"
                      id="yes31"
                      {...register("yes31")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes31"
                      id="yes31"
                      {...register("yes31")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes31 === "true" && (
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

export default ELcetrical;
