// import React, { useState, useEffect } from 'react';

import { useState } from "react";
import { FaStar } from 'react-icons/fa';



import '../style/rating.css';

var Rating = () => {


    var [rating, setRating] = useState(null);
    var [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                var ratingValue = i + 1;
                return (
                <label>
                    <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        />

                    <FaStar 
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size={78} 
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}




export default Rating;

