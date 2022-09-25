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
import { useRef } from "react";
import SignaturePad from "react-signature-canvas";
import "./Signture.css";

function Signature(props) {
  const { register } = props;

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const signPad = useRef({});
  let data = "";
  function clear() {
    signPad.current.clear();
  }
  function save() {
    data = signPad.current.toDataURL();
  }
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography sx={{ mt: 3, mb: 6 }}>
          This SWMS has been developed in consultation with the relevant
          employer and workers on site. I have read the above SWMS and I
          understand its contents. I confirm that I have the skills and
          training, including relevant certification to conduct the task as
          described. I agree to comply with safety requirements within this SWMS
          including risk control measures, safe work instructions and Personal
          Protective Equipment as described. I will refrain from tasks for which
          I do not have the appropriate skills, training or certification and
          inform the site foreperson / Furlong Management immediately.
        </Typography>
        <TextField
          {...register("Name")}
          sx={{ mb: 3, width: { lg: "800px" } }}
          label="Name"
          id="fullWidth"
        />
        <Typography sx={{ fontSize: "14px", marginRight: "680px" }}>
          signature1
        </Typography>
        <Box className="signature">
          {" "}
          <SignaturePad ref={signPad}></SignaturePad>
        </Box>
        <Box sx={{ mt: 2, marginRight: "550px" }}>
          <Button variant="contained" onClick={clear} sx={{ mr: 2 }}>
            Clear
          </Button>
          <Button variant="contained" onClick={save}>
            Save
          </Button>
        </Box>

        <TextField
          {...register("Name2")}
          sx={{ mb: 3, mt: 3, width: { lg: "800px" } }}
          label="Name"
          id="fullWidth"
        />
        <Typography sx={{ fontSize: "14px", marginRight: "680px" }}>
          signature 2
        </Typography>
        <Box className="signature">
          {" "}
          <SignaturePad ref={signPad}></SignaturePad>
        </Box>
        <Box sx={{ mt: 2, marginRight: "550px" }}>
          <Button variant="contained" onClick={clear} sx={{ mr: 2 }}>
            Clear
          </Button>
          <Button variant="contained" onClick={save}>
            Save
          </Button>
        </Box>
        <TextField
          {...register("Name3")}
          sx={{ mb: 3, mt: 3, width: { lg: "800px" } }}
          label="Name"
          id="fullWidth"
        />
        <Typography sx={{ fontSize: "14px", marginRight: "680px" }}>
          signature 3
        </Typography>
        <Box className="signature">
          {" "}
          <SignaturePad ref={signPad}></SignaturePad>
        </Box>
        <Box sx={{ mt: 2, marginRight: "550px" }}>
          <Button variant="contained" onClick={clear} sx={{ mr: 2 }}>
            Clear
          </Button>
          <Button variant="contained" onClick={save}>
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Signature;
