import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Painting from "./Painting";
import SafeWork from "./SafeWork";
import Planning from "./Planning";
import Equipment from "./Equipment";
import WorkArea from "./WorkArea";
import Surface from "./Surface";
import Noice from "./Noice";
import ELcetrical from "./ELcetrical";

import Hazardous from "./Hazardous";
import Completion from "./Completion";
import { useForm } from "react-hook-form";
import Environment from "./Environment";

const steps = ["", "", "", "", "", "", "", "", "", "", ""];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  function getStepContent(step, register, watch, activeStep) {
    switch (step) {
      case 0:
        return <Painting register={register}></Painting>;
      case 1:
        return <SafeWork register={register} watch={watch}></SafeWork>;
      case 2:
        return <Planning register={register} watch={watch}></Planning>;
      case 3:
        return <Equipment register={register} watch={watch}></Equipment>;
      case 4:
        return <WorkArea register={register} watch={watch}></WorkArea>;
      case 5:
        return <Surface register={register} watch={watch}></Surface>;
      case 6:
        return <Noice register={register} watch={watch}></Noice>;
      case 7:
        return <ELcetrical register={register} watch={watch}></ELcetrical>;
      case 8:
        return <Environment register={register} watch={watch}></Environment>;
      case 9:
        return <Hazardous register={register} watch={watch}></Hazardous>;
      case 10:
        return <Completion activeStep={activeStep}></Completion>;
      default:
        return "unknown stage";
    }
  }

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log({ data });

  return (
    <Box sx={{ width: "50%", mt: 10 }} mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="contained" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}> */}
              {/* Step {activeStep + 1} */}
              {getStepContent(activeStep, register, watch, activeStep)}
              {/* </Typography> */}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  variant="contained"
                  // color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button variant="contained" onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
        {activeStep == 10 ? (
          <Button type="submit" variant="contained">
            Finish
          </Button>
        ) : (
          ""
        )}
      </form>
    </Box>
  );
}
