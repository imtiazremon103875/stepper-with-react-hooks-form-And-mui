import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

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
            sx={{ mb: 3, width: { lg: "700px" } }}
            label="Principal Contractor"
            id="fullWidth"
          />
          <TextField
            sx={{ mb: 3, width: { lg: "700px" } }}
            label="client"
            id="fullWidth"
          />
          <TextField
            sx={{ mb: 3, width: { lg: "700px" } }}
            id="outlined-multiline-static"
            label="Workplace location"
            multiline
            rows={4}
          />
          <TextField
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
        </Grid>
      </Box>
    </form>
  );
}

export default Painting;
