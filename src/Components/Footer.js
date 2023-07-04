import React from 'react'
import { Box, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <Box sx={{
        backgroundColor: '#2563EB',
        color: '#FFFF',
        pt: "2.5rem ",
        px: {xs: '1rem',sm:"2.5rem"},
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        width: '100%',
    }}>
        <Box sx={{
          width: {xs: '100%', sm: '15%', lg: '18%'},
        }}>
          <Typography variant="h4" component="div">ZUMAXAA</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          width: {xs: '100%', lg: '75%'},
          py: '4rem',
          justifyContent: 'space-between',
          
        }}>
          <Typography  component='div' sx={{
                fontStyle: 'oblique',
                typography: {xs: 'subtitle2', sm: 'subtitle1'},
                pr: '10px',
              }}> Metro Pillar Number 461, ZUMAXAA, NO 861-862, Delhi - Rohtak Rd, BAHADURGARHROAD, Bahadurgarh, Haryana 124507</Typography>
          <Typography  component='div' sx={{
                fontStyle: 'oblique',
                typography: {xs: 'subtitle2', sm: 'subtitle1'}
              }}> Metro Pillar Number 461, ZUMAXAA, NO 861-862, Delhi - Rohtak Rd, BAHADURGARHROAD, Bahadurgarh, Haryana 124507</Typography>
        </Box>
        <Box sx={{
          width: {xs: '100%', sm: '50%' , md: '30%'},
          display: 'flex',
          flexDirection: 'column',
          pb: '1.5rem',
        }}>
            <Box sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
              
            }}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </Box>
            <Box sx={{
              width: '100%',
              textAlign: 'center',
              pt: '15px',
            }}>
              <Typography variant='subtitle1' component='div'>Connect With Us</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer