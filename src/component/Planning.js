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

function Planning(props) {
  const { register, watch } = props;
  const Hazardous = watch("Hazardous");
  // const allValues = watch();
  // console.log({ allValues });
  const yes1 = watch("yes1");
  console.log(yes1);

  const alchohol = watch("alchohol");

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
        <Typography sx={{ marginRight: "550px", mt: 3 }}>
          Task Name: Planning
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
              value="Hazardous"
              name="Hazardous"
              id="Hazardous"
              {...register("Hazardous")}
              control={<Radio />}
              label="Hazardous Materials"
            />
            {Hazardous && (
              <Box>
                <Typography
                  sx={{
                    // marginRight: "200px",
                    mt: 2,
                    mb: 2,
                    fontSize: "24px",
                  }}
                >
                  {" "}
                  Hazardous Material
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
                    Workers or others catching COVID-19
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "35px", mt: 3, mb: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes1"
                      id="yes1"
                      {...register("yes1")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes1"
                      id="yes1"
                      {...register("yes1")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>

                {yes1 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ marginRight: "100px" }}>
                      Inherent Risk Rating{" "}
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
                        Review site hazardous materials register, follow
                        internal safe work processes and practices for working
                        with or surrounding these materials
                      </strong>
                    </Typography>
                    <Typography variant="p" sx={{ marginRight: "20px" }}>
                      Residual Risk Rating - (Workers or others catching
                      COVID-19)
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

export default Planning;
