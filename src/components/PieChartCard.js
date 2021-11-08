import React from "react";
import styled, { ThemeProvider, css } from "styled-components";
import SimpleCard from "./SimpleCard.js";
import theme from "../styling-properties/propPieChart"
import Chart from 'react-apexcharts';
import { useState } from "react";

const ChartDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
`

const PieChartCard = function(){

    const [options, setOptions] = useState({
        series: [50, 30, 40, 5, 5],
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        dataLabels: {
            
        },
        chart: {
            toolbar: {
                show:true,
                offsetX: 50,
                offsetY: -170,
                tools: {
                    download: true,
                },
            },
            // textcolor
            foreColor: '#ffffff',
            fontFamily: 'Helvetica, Arial, sans-serif',
            background: 'None',
            animations: {
                enabled: true,
                speed: 1000,
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            },
            width: 380,
            type: 'pie',
        },
        labels: ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'],
        responsive: [{
            breakpoint: 480,
        }]
    });

    return(
        <div>
            <ThemeProvider theme={theme}>    
            <SimpleCard cardTitle="Ethnicities ">
                RevolutionUC 2019
                <br></br>
                250
                <ChartDiv>
                  <Chart options={options} series={options.series} type="pie" height="auto" width="150%"/>
                </ChartDiv>
            </SimpleCard>
        </ThemeProvider>
        </div>
    );
}

export default PieChartCard;