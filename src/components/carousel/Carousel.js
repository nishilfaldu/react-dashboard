import React from 'react';
import '../../assets/css/Carousel.css';
import { useState } from 'react';

const Carousel = function({ children }){

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = function(newIndex){
        if (newIndex < 0){
            newIndex = 0;
        }
        else if (newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    };

    return(
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex*100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

            <div className='indicators'>
                {React.Children.map(children, (child, index) => {
                    return(
                        // <button 
                        // onClick={() => {
                        //     updateIndex(index);
                        // }}
                        // style={{backgroundImage:'url(/src/assets/images/revuc-fall-2014.png)', width:'100rem', height:'10rem'}}></button>
                        <img onClick={() => {
                                updateIndex(index);
                            }} 
                        src={child.props.src} alt={child.props.alt}></img>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;