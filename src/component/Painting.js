import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import pic1 from "../../src/image/logo1.png";
import pic2 from "../../src/image/pp.png";

function Painting(props) {
  const { register } = props;
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <img src={pic1} style={{ width: "400px" }} />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="p" sx={{ fontSize: "14px", mt: 4, mb: 4 }}>
          All persons involved in works must have SWMS communicated to them
          before works commence and amend <br /> where necessary during works.
          Tool Box meetings identify, control and communicate hazards, with work
          ceasing <br /> if incident or near miss occurs.
        </Typography>
        <TextField
          {...register("principle")}
          sx={{ mb: 3, width: { lg: "700px" } }}
          label="Principal Contractor"
          id="fullWidth"
        />
        <TextField
          {...register("client")}
          sx={{ mb: 3, width: { lg: "700px" } }}
          label="client"
          id="fullWidth"
        />
        <TextField
          {...register("work location")}
          sx={{ mb: 3, width: { lg: "700px" } }}
          id="outlined-multiline-static"
          label="Workplace location"
          multiline
          rows={4}
        />
        <TextField
          {...register("work Activities")}
          sx={{ mb: 3, width: { lg: "700px" } }}
          label="Work Activity"
          id="fullWidth"
        />
        <TextField
          sx={{ mb: 3, width: { lg: "700px" } }}
          label="Project Manager"
          id="fullWidth"
        />
        <TextField
          sx={{ mb: 3, width: { lg: "700px" } }}
          label="Furlong Painting - Project Number*"
          id="fullWidth"
        />
        <FormControl sx={{ marginRight: "340px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Workplace Hazardous Materials Register Sighted
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="No" control={<Radio />} label="Yes" />
            <FormControlLabel value="Yes" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Typography sx={{ marginRight: "85px", marginTop: "35px" }}>
          PERSONS CONSULTED IN DEVELOPMENT, REVIEW AND APPROVAL OF SWMS :
        </Typography>
        <table style={{ marginTop: "25px", marginRight: "30px" }}>
          <thead>
            <tr>
              <th></th>
              <th>Person 1</th>
              <th>person 2</th>
              <th>Person3</th>
              <th>Person4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <TextField
                  {...register("name1")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("name2")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("name3")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("name4")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
            </tr>
            <tr>
              <td>Initial</td>
              <td>
                <TextField
                  {...register("initial1")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("initial2")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("initial3")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("initial4")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <TextField
                  {...register("date1")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("date2")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("date3")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  {...register("date4")}
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Typography sx={{ fontSize: "18px", mt: 2 }}>Key Concepts</Typography>
        <Typography variant="p" sx={{ fontSize: "14px", mt: 2 }}>
          Hazard Something in the work environment that has the potential to
          cause harm to a person (injury, illness or death).
        </Typography>
        <Typography variant="p" sx={{ fontSize: "14px", mt: 2 }}>
          Risk The chance (or likelihood) that a hazard will cause that harm..
        </Typography>
        <Typography variant="p" sx={{ fontSize: "14px", mt: 2 }}>
          Control Measure - A thing, work process or system of work that
          controls the OHS hazard or risk
        </Typography>
        <Typography sx={{ fontSize: "18px", mt: 3 }}>
          OHS Risk Matrix and PPE Guide
        </Typography>

        <Typography variant="p" sx={{ fontSize: "14px", mt: 2, mb: 2 }}>
          To be used to assess the risk rating for identified risks
        </Typography>
      </Grid>

      <img src={pic2} style={{ width: "600px" }} />
    </Box>
  );
}

export default Painting;
