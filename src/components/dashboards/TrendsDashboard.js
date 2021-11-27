import React from 'react';
import LineChartCard from '../cards/charts/LineChartCard'; 

const TrendsDashboard = function(){
    return(
        <div>
            <LineChartCard cardTitle='Experience' cardLabel='Hackathons' cardValue='10'></LineChartCard>
        </div>
    );
}

export default TrendsDashboard;