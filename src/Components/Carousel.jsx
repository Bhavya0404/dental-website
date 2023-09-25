// import * as React from 'react';
// import { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { SvgIcon } from '@mui/material';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     imgPath:
//     require('../assets/images/image1.jpg'),
//   },
//   {
//     imgPath:
//     require('../assets/images/image1.jpg'),
//   },
//   {
//     imgPath:
//         require('../assets/images/image1.jpg'),
//   },
//   {
//     imgPath:
//     require('../assets/images/image1.jpg'),
//   },
//   {
//     imgPath:
//     require('../assets/images/image1.jpg'),
//   },
// ];

// function Carousel() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };
// //   maxWidth: 400
//   return (
//     <Box sx={{  
//     width: '100%',
//     flexGrow: 1,
//     // pt: '12.8rem',
//     position: 'relative',

//     }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 88,
//           pl: 2,
//           bgcolor: 'background.default',
          
//         }}
//       >
//         {/* <Typography>{images[activeStep].label}</Typography> */}
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: {
//                     sm: 255,
//                     md: 480,
//                   },
//                   display: 'block',
//                   overflow: 'hidden',
//                   width: '100%',
//                   objectFit: 'cover',
                  
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//       sx={{
//           position: 'absolute',
//           top: {
//             md: '85%',
//             xs: '80%',
//           },
//           padding: '5px',
//           // backgroundColor: 'wheat',
//           backgroundColor: 'rgba(0,0,0,0)',
//           width: '100%',

//         }}
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//           sx={{
//               // position: 'absolute',
//               top: {
//                 // md: '-230px',
//                 md: '-14rem',
//                 xs: '-7rem',
//               },
//               height: '7rem',
//               right: '0px',

//             }}
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             {/* <ArrowForwardIosIcon /> */}
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button 
//           sx={{
//               // position: 'absolute',
//               top: {
//                 md: '-14rem',
//                 xs: '-7rem',
//               },
//               right: '0px',
//               height: '7rem',
//               // height: '4rem',
//               // backgroundColor: 'white',
//             }}
//           size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default Carousel;