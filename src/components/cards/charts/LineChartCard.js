import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SimpleCard from "../card/SimpleCard";
import theme from "../../themes/propBarChart"
import Chart from 'react-apexcharts';
import { useState } from "react";

const ChartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LineChartCard = function(props){

    const [option, setOptions] = useState({
        series: [
            {
                // name: 'Registrants',
                // data: []
            }
        ]
    });
}