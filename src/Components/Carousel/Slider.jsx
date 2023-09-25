import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Paper, Button } from '@mui/material'
import Item from "./Item"
import slider from "../../data/slider.json"

function Slider(props)
{

    return (
            <Carousel>
            {
                slider.map( (item) => <Item key={item.id} item={item} /> )
            }
            </Carousel>

    )
}

export default Slider;