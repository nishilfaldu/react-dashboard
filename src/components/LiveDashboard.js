import styled from 'styled-components';
import PieChartCard from './PieChartCard';

const LiveDashboard = function(){
    return(
        <div>
            <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="5"></PieChartCard>
        </div>
    );
}

export default LiveDashboard;