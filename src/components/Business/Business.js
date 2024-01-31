import React from 'react';
import './Business.css'

function Business(prop) {
    return (
        <div className='restaurant-card'>
            {/* <img src="" alt=""> */}
            <div className="info">
                <p className="name">Wilson's Business</p>
                <p className="address">Las Piñas</p>
                <p className="category">Clothing</p>
                <p className="rating">5</p>
                <p className="reviews">"It is nice"</p>
            </div>
        </div>
    )
}


export default Business;