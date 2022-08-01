// Imports
import React from 'react';
import { Rating } from '@mui/material';
// ...

// Function
const Card = (props) => {
    // Badge
    let badge
    if (props.lesson.openSpots === 0) {
        badge = "Sold Out"
    } else if (props.lesson.location) {
        badge = "Online"
    } else {
        badge = "Offline"
    }
    // ...

    // Card Return
    return (
        <div className="card-item">
            <img src={props.lesson.img} alt="" className="card-img" />
            <div className="card-condition">{badge}</div>
            <div className="card-footer">
                <div className="card-rate">
                    <Rating
                        className="Rating"
                        name="simple-controlled"
                        value="1"
                        max="1"
                    />
                    <span className="rating-span">{props.lesson.rating}</span>
                </div>
                <div className="card-description">{props.lesson.desciption}</div>
                <div className="card-price"><b>{props.lesson.price}</b>{props.lesson.object}</div>
            </div>
        </div>
    )
    // ...

}
// ...

// Export
export default Card;
// ...
