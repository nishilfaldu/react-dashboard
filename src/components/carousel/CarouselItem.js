import React from 'react';

const CarouselItem = function({ children, width }){
    return(
        <div style = {{ width: width }}>
            {children}
        </div>
    );
}

export default CarouselItem;