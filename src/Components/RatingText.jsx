import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Carousel/Item'
import rating from '../data/rating.json'
const RatingText = () => {
    return (
        <Carousel>
        {
            rating.map( (item) => <Item key={item.id} item={item} /> )
        }
        </Carousel>

)
}

export default RatingText