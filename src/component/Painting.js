import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Painting() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
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
            <tr>
              <th></th>
              <th>Person 1</th>
              <th>person 2</th>
              <th>Person3</th>
              <th>Person4</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <TextField
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
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
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
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
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
              <td>
                <TextField
                  sx={{ mb: 1, width: { lg: "150px" } }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </td>
            </tr>
          </table>

          <Typography sx={{ fontSize: "18px", mt: 2 }}>
            <strong>Key Concepts</strong>
          </Typography>
          <Typography variant="p" sx={{ fontSize: "14px", mt: 2 }}>
            <strong> Hazard-</strong> Something in the work environment that has
            the potential to cause harm to a person (injury, illness or death).
          </Typography>
          <Typography variant="p" sx={{ fontSize: "14px", mt: 2 }}>
            <strong> Risk -</strong> The chance (or likelihood) that a hazard
            will cause that harm..
          </Typography>
          <Typography variant="p" sx={{ fontSize: "14px", mt: 2 }}>
            <strong> Control Measure</strong> - A thing, work process or system
            of work that controls the OHS hazard or risk
          </Typography>
        </Grid>
      </Box>
    </form>
  );
}

export default Painting;
