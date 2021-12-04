import React from 'react';
import YearlyDashboard from '../dashboards/YearlyDashboard';
import Navbar from '../navbar/Navbar';

const YearlyPage = function(props){
    return(
        <div>
            <Navbar/>
            <YearlyDashboard></YearlyDashboard>
        </div>
    );
}

export default YearlyPage;