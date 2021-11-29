import React from 'react';

const CarouselItem = function({ children, width }){
    return(
        <div style = {{ width: width, color: 'white' }}>
            {children}
        </div>
    );
}

export default CarouselItem;