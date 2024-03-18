"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "About",
    description: `Desarrolladora Full Stack con orientación hacia el backend y experiencia en el desarrollo web de extremo a extremo. Graduada en la carrera Full Stack de Henry, una experiencia que me brindó una base sólida en programación y desarrollo de aplicaciones web. Especializada en el desarrollo web3, explorando tecnologías emergentes y blockchain.
    A lo largo de mi carrera, he trabajado en una variedad de proyectos desafiantes que me han permitido adquirir habilidades en diseño, desarrollo e implementación de soluciones tecnológicas. 
`,
  },

  {
    label: "Experiencia",
    description: `He desarrollado aplicaciones modernas, eficientes y fáciles de mantener tanto para clientes internos como para clientes externos. Mi experiencia incluye trabajar con startups en el desarrollo de productos desde cero, así como colaborar como freelancer en proyectos en los que he trabajado en estrecha colaboración con otros desarrolladores para cumplir con los objetivos del cliente.
`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, color: "white" }}>
      <Stepper
        sx={{ color: "white" }}
        activeStep={activeStep}
        orientation="vertical"
        style={{ color: "#F7EFE5" }}
      >
        {steps.map((step, index) => (
          <Step sx={{ color: "white" }} key={step.label}>
            <StepLabel
              style={{ color: "white", background: "#b5c0d0" }}
              optional={
                index === 2 ? (
                  <Typography
                    style={{ color: "white" }}
                    variant="caption"
                  ></Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent style={{ color: "white" }}>
              <Typography style={{ color: "white" }}>
                {step.description}
              </Typography>

              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1, borderRadius: "50px" }}
                  style={{ color: "white" }}
                >
                  {index === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{
                    mt: 1,
                    mr: 1,
                    borderRadius: "50px",
                    background: "#b5c0d0",
                  }}
                >
                  Back
                </Button>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Button
          onClick={handleReset}
          sx={{ mt: 1, mr: 1, background: "#b5c0d0" }}
        >
          Reset
        </Button>
      )}
    </Box>
  );
}
