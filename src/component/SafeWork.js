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

function SafeWork(props) {
  const { register, watch } = props;
  const clients = watch("clients");
  // const allValues = watch();
  // console.log({ allValues });
  const yes3 = watch("yes3");
  const yes4 = watch("yes4");

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
        <Typography sx={{ fontSize: "18px", mt: 3 }}>
          <strong> Covid 19 safe Work Plan</strong>
        </Typography>
        <Typography sx={{ marginRight: "550px", mt: 3 }}>
          Task Name: <span style={{ color: "red" }}>Attending work site</span>
        </Typography>
        <FormControl sx={{ marginRight: "350px", mt: 3 }}>
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>
              Would this Hazardous Element exist on this worksite?
            </strong>
          </FormLabel>
          <RadioGroup
            sx={{ marginLeft: "60px", mt: 3 }}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="clients"
              name="clients"
              id="clients"
              {...register("clients")}
              control={<Radio />}
              label="Attracting COVID-19 from clients, other workers or surfaces"
            />
            {clients && (
              <Box>
                <Typography
                  sx={{
                    marginRight: "300px",
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
                    sx={{ marginRight: "200px", mt: 2 }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    <strong> What are the hazards and risks?</strong>
                  </FormLabel>
                  <Typography sx={{ marginRight: "180px", mt: 1 }} variant="p">
                    Workers or others catching COVID-19
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "35px", mt: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes3"
                      id="ye3"
                      {...register("yes3")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes3"
                      id="yes3"
                      {...register("yes3")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes3 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ marginRight: "20px" }}>
                      Inherent Risk Rating - (Workers or others catching
                      COVID-19)
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
                      sx={{ marginRight: "150px", color: "blue" }}
                    >
                      How will the hazards and risk be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, fontSize: "14px" }}>
                      Staff and contractors have been briefed on symptoms of
                      COVID-19
                    </Typography>
                    <ul style={{ marginTop: "20px", marginBottom: "20px" }}>
                      <li>
                        Avoid contact with others (shaking hands, touching
                        faces)
                      </li>
                      <li>
                        Wearing of disposable nitrile gloves when required on
                        site
                      </li>
                      <li>
                        Avoid touching surfaces on client sites without gloves
                        on.s
                      </li>

                      <li>
                        Cover your mouth when coughing and sneezing with tissue
                      </li>
                      <li>
                        Avoid using client staffrooms / common areas for meal
                        breaks
                      </li>
                    </ul>
                    <Typography variant="p" sx={{ marginRight: "20px" }}>
                      Residual Risk Rating - (Workers or others catching
                      COVID-19)
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
              value="alchohol"
              name="alchohol"
              id="alchohol"
              {...register("alchohol")}
              control={<Radio />}
              label="Alcohol based sanitiser"
            />
            {alchohol && (
              <Box>
                <Typography
                  sx={{
                    marginRight: "300px",
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
                    sx={{ marginRight: "200px", mt: 2 }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    <strong> What are the hazards and risks?</strong>
                  </FormLabel>
                  <Typography sx={{ marginRight: "280px", mt: 1 }} variant="p">
                    Dermatitis
                  </Typography>
                  <RadioGroup
                    sx={{ marginLeft: "35px", mt: 3 }}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={true}
                      name="yes4"
                      id="yes4"
                      {...register("yes4")}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      name="yes4"
                      id="yes4"
                      {...register("yes4")}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                {yes4 === "true" && (
                  <Box>
                    <Typography variant="p" sx={{ marginRight: "220px" }}>
                      Inherent Risk Rating - (Dermatitis)
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
                      sx={{ marginRight: "150px", color: "blue" }}
                    >
                      How will the hazards and risk be controlled?
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ mt: 2, mb: 2, fontSize: "14px" }}>
                      Staff are encouraged to wash hands with soap and water for
                      20 secs where
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ marginRight: "230px", mt: 3 }}
                    >
                      Residual Risk Rating - (Dermatitis)
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

export default SafeWork;
