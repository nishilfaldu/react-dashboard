import React from 'react';
import LiveDashboard from './LiveDashboard';
import Tab from './Tab'
const LivePage = function(props){
    return(
        <div>
            <Tab></Tab>
            <LiveDashboard></LiveDashboard>
        </div>
    );
}

export default LivePage;