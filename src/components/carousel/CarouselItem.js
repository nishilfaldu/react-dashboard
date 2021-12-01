import React from 'react';
import '../../assets/css/CarouselItem.css';

const CarouselItem = function({ children, width, height }){
    return(
        <div className='carousel-item' style = {{ width: width, height: height }}>
            {children}
        </div>
    );
}

export default CarouselItem;