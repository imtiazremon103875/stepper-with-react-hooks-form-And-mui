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
import { useForm } from "react-hook-form";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function WorkArea(props) {
  const { register, watch } = props;
  const Manual = watch("Manual");

  const yes = watch("yes");
  const yes2 = watch("yes2");
  const yes3 = watch("yes3");
  const no = watch("no");
  const object = watch("object");
  const planks = watch("planks");
  // console.log({ alchohol });

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
          Task Name: Work Area Setup
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
              value="Manual"
              name="Manual"
              id="Manual"
              {...register("Manual")}
              control={<Radio />}
              label="Manual Handling Risks"
            />
            {Manual && (
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
                  Manual Handling Risks
                </Typography>
                <Divider
                  sx={{
                    mt: 2,
                    mb: 2,
                  }}
                />
                <FormControl>
                  <Typography sx={{ mt: 1 }} variant="p">
                    Repetitive work activities -
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
                      value="female"
                      name="yes"
                      id="yes"
                      {...register("yes")}
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
                {yes && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How will the hazards and risk be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        {" "}
                        Identify repetitive tasks and implementation of manual
                        handling techniques e.g. Rotate repetitive tasks etc.
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
                    Physical manoeuvring of paint, tools and equipment -
                    <span style={{ color: "red" }}>
                      Is it a risk at this site?
                    </span>
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "70px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes3"
                      name="yes3"
                      id="yes3"
                      {...register("yes3")}
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
                {yes3 && (
                  <Box>
                    <Typography variant="p" sx={{ color: "blue" }}>
                      How hazards will be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 3, fontSize: "14px" }}>
                      <strong>
                        Use manual handling aids where ever possible. Reduce
                        paint container size to under 10 litre in size where
                        possible.
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
              label="Emergency Fire "
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
                  Emergency Fire
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
                      value="female"
                      name="yes2"
                      id="yes2"
                      {...register("yes2")}
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
                {yes2 && (
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
              label="Working adjacent"
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
                      value="female"
                      name="yes"
                      id="yes"
                      {...register("yes")}
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
                {yes && (
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
                      value="yes3"
                      name="yes3"
                      id="yes3"
                      {...register("yes3")}
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
                {yes3 && (
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
            <FormControlLabel
              value="Contact"
              name="Contact"
              id="Contact"
              {...register("Contact")}
              control={<Radio />}
              label="Contact with mobile"
            />
            <FormControlLabel
              value="Painting"
              name="Painting"
              id="Painting"
              {...register("Painting")}
              control={<Radio />}
              label="Spray Painting"
            />

            <FormControlLabel
              value="surface"
              name="surface"
              id="surface"
              {...register("surface")}
              control={<Radio />}
              label="Ground surface"
            />

            <FormControlLabel
              value="Heights"
              name="Heights"
              id="Heights"
              {...register("Heights")}
              control={<Radio />}
              label="Working at Heights"
            />

            <FormControlLabel
              value="Ladder"
              name="Ladder"
              id="Ladder"
              {...register("Ladder")}
              control={<Radio />}
              label="Ladder Safety"
            />

            <FormControlLabel
              value="Trestle"
              name="Trestle"
              id="Trestle"
              {...register("Trestle")}
              control={<Radio />}
              label="Trestle Safety"
            />

            <FormControlLabel
              value="EWP"
              name="EWP"
              id="EWP"
              {...register("EWP")}
              control={<Radio />}
              label="EWP"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default WorkArea;
