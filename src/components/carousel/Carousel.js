import React from 'react';

const Carousel = function({ children }){
    return(
        <div>
            <div style={{ transform: 'translateX(0%)'}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    );
}

export default Carousel;