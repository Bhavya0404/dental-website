import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { SvgIcon } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    id: 1,
    text:"I recently experienced the exceptional service of [Your Service], and I couldn't be happier! From the start, their professionalism, attention to detail, and commitment to customer satisfaction were outstanding. They exceeded all my expectations and delivered impeccable results. The entire process was smooth, their communication was transparent, and their customer service was exceptional "
  },
  {
    id: 1,
    text:"I recently experienced the exceptional service of [Your Service], and I couldn't be happier! From the start, their professionalism, attention to detail, and commitment to customer satisfaction were outstanding. They exceeded all my expectations and delivered impeccable results. The entire process was smooth, their communication was transparent, and their customer service was exceptional.  "
  },
  {
    id: 1,
    text:"I recently experienced the exceptional service of [Your Service], and I couldn't be happier! From the start, their professionalism, attention to detail, and commitment to customer satisfaction were outstanding. They exceeded all my expectations and delivered impeccable results. The entire process was smooth, their communication was transparent, and their customer service was exceptional. "
  },
 
];

function RatingText() {
  const autoplayInterval = 8000;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
//   maxWidth: 400
  return (
    <Box sx={{  
    width: {
      md: '80%',
      xs: '100%',
    },
    flexGrow: 1,
    textAlign: 'center',
    }}>

      <AutoPlaySwipeableViews
        interval={autoplayInterval}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Typography variant='subtitle1' component='div' sx={{
                fontStyle: 'oblique',
              }}>
              {step.text}
              </Typography>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default RatingText;