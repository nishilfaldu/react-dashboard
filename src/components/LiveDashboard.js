import styled from 'styled-components';
import PieChartCard from './PieChartCard';
import BarChartCard from './BarChartCard';

const LiveDashboard = function(){
    return(
        <div>
            <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="5"></PieChartCard>
            <BarChartCard cardTitle="Countries" cardLabel="Count" cardValue="250"></BarChartCard>
            <PieChartCard cardTitle="Gender" cardLabel="Female" cardValue="25%"></PieChartCard>
        </div>
    );
}

export default LiveDashboard;