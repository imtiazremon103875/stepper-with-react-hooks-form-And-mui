import {
  Box,
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

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Equipment(props) {
  const { register, watch } = props;

  const covid19 = watch("covid19");

  const yes5 = watch("yes5");
  const yes6 = watch("yes6");
  const yes7 = watch("yes7");
  const yes8 = watch("yes8");
  const yes9 = watch("yes9");

  const object = watch("object");
  const planks = watch("planks");
  // console.log({ alchohol });
  const onSubmit = (data) => console.log(data);
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
          Task Name: Transporting Paint and Equipment
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
              value="covid19"
              name="covid19"
              id="covid19"
              {...register("covid19")}
              control={<Radio />}
              label="Environmental - incidient/spills"
            />
            {covid19 && (
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
                  Environmental - incidient/spills
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
                    <strong> What are the hazards and risks?</strong>
                  </FormLabel>
                  <Typography sx={{ mt: 1 }} variant="p">
                    Unsecured hazardous material containers in vehicles -
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
                      value="yes5"
                      name="yes5"
                      id="yes5"
                      {...register("yes5")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes5 && (
                  <Box>
                    <Typography variant="p">
                      Inherent Risks - Unsecured hazardous material container in
                      vehicles
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
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How will the hazards and risk be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        {" "}
                        All lids securely fastened and materials securely
                        fastened in vehicles
                      </strong>
                    </Typography>
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
                    Waste to Ground -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "50px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes6"
                      name="yes6"
                      id="yes6"
                      {...register("yes6")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes6 && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How will the hazards controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        Prevent contamination to sewers, drains and waterways
                        and zero waste to ground.
                      </strong>
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
            <FormControlLabel
              value="object"
              name="object"
              id="object"
              {...register("object")}
              control={<Radio />}
              label="Flying Objects"
            />
            {object && (
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
                  Environmental - incidient/spills
                </Typography>
                <Divider
                  sx={{
                    mt: 2,
                    mb: 2,
                  }}
                />
                <FormControl>
                  <FormLabel
                    sx={{ marginRight: "80px", mt: 2, fontSize: "14px" }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    <strong> What are the hazards and risks?</strong>
                  </FormLabel>
                  <Typography sx={{ mt: 1, fontSize: "14px" }} variant="p">
                    <strong>
                      Flying Objects - Struck by flying object -{" "}
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
                      value="yes7"
                      name="yes7"
                      id="yes7"
                      {...register("yes7")}
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
                {yes7 && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How will the hazards and risks be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        Fixed barrier between driver cabin and storage area of
                        the vehicle
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
              value="planks"
              name="planks"
              id="planks"
              {...register("planks")}
              control={<Radio />}
              label="Securing Ladders/planks"
            />
            {planks && (
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
                  Securing Ladders/planks
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
                    <strong> What are the hazards and risks?</strong>
                  </FormLabel>
                  <Typography sx={{ mt: 1 }} variant="p">
                    Horizontal overhang of ladders, planks etc -
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
                      value="yes8"
                      name="yes8"
                      id="yes8"
                      {...register("yes8")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes8 && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How will the hazards and risks be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        {" "}
                        Minimize horizontal overhang of ladders and planks. Tie
                        a red flag (at least 300mm x 300mm) on the end of any
                        ladder / plank that extends beyond the rear of the
                        vehicle
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
                    Waste to Ground -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "50px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes9"
                      name="yes9"
                      id="yes9"
                      {...register("yes9")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes9 && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        Install securing points for ladders, planks to minimal
                        movement and vibration
                      </strong>
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

export default Equipment;
