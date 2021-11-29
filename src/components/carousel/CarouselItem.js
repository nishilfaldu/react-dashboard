import React from 'react';
import '../../assets/css/CarouselItem.css';

const CarouselItem = function({ children, width }){
    return(
        <div className='carousel-item' style = {{ width: width }}>
            {children}
        </div>
    );
}

export default CarouselItem;