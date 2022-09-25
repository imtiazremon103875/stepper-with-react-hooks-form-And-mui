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
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
function Completion(props) {
  const { register, watch } = props;
  const GH = watch("GH");

  const yes37 = watch("yes37");
  const yes38 = watch("yes38");
  const yes39 = watch("yes39");
  const yes40 = watch("yes40");

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
          Task Name - Completion of scope of works
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
              value="GH"
              name="GH"
              id="GH"
              {...register("GH")}
              control={<Radio />}
              label="General Hazards"
            />
            {GH && (
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
                  General Hazards
                </Typography>
                <Divider
                  sx={{
                    mt: 2,
                    mb: 2,
                  }}
                />
                <FormControl>
                  <Typography sx={{ mt: 1 }} variant="p">
                    Returning work area to the state in which you commenced -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "65px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes37"
                      id="yes37"
                      {...register("yes37")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes37"
                      id="yes37"
                      {...register("yes37")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes37 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How will the hazards and risks be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        {" "}
                        Clean up all tools and waste ensuring the site is left
                        in a clean and tidy condition, removing all debris from
                        the area
                      </strong>
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
                    <Typography variant="p" sx={{ marginRight: "120px" }}>
                      <strong> Residual Risk Rating</strong>
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
                    Accidental exposure to contaminated wastes -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "65px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes38"
                      id="yes38"
                      {...register("yes38")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes38"
                      id="yes38"
                      {...register("yes38")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes38 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      Dispose of all contaminated wastes, using correct
                      procedures. Return unwanted paint to the office for
                      recycling or disposal.
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
                <FormControl>
                  <Typography sx={{ mt: 1 }} variant="p">
                    Reconnection of energy sources -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "65px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes39"
                      id="yes39"
                      {...register("yes39")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes39"
                      id="yes39"
                      {...register("yes39")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes39 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      Return all energy sources when safe to do so
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
                <FormControl>
                  <Typography sx={{ mt: 1 }} variant="p">
                    Traffic hazards -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "40px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes40"
                      id="yes40"
                      {...register("yes40")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes40"
                      id="yes40"
                      {...register("yes40")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes40 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How will the hazards and risks be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        {" "}
                        Remove all signage and safety barriers when works are
                        completed and safe to do so
                      </strong>
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
                    <Typography variant="p" sx={{ marginRight: "120px" }}>
                      <strong> Residual Risk Rating</strong>
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
        <Typography sx={{ marginRight: "550px", mt: 3, fontSize: "14px" }}>
          Other Hazardous Elements
        </Typography>
        <table style={{ marginTop: "25px", marginRight: "300px" }}>
          <thead>
            <tr>
              <th></th>
              <th> What are the hazards and risks?</th>
              <th>Is it a risk at this site? (Yes/No)</th>
              <th>Inherent Risk Rating (1-4)</th>
              <th>How the hazards and risks be controlled?</th>
              <th>Residual Risk Rating (1-4)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>other 1</td>
              <td>
                <TextField
                  {...register(" What are the hazards and risks?")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register(" Is it a risk at this site? (Yes/No)")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register(" Inherent Risk Rating (1-4)")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("How the hazards and risks be controlled?")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("Residual Risk Rating (1-4)")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Typography sx={{ marginRight: "600px", fontSize: "10px" }}>
          Add other hazardous elements
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Completion;
