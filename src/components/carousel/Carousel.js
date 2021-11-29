import React from 'react';
import '../../assets/css/Carousel.css';
import { useState } from 'react';

const Carousel = function({ children }){

    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex*100})` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    );
}

export default Carousel;