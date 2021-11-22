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

const PieChartCard = function(props){

    const [options, setOptions] = useState({
        series: [20, 20, 20, 20, 20],
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        dataLabels: {
            enabled: true,
            // style for text on graph
            style: {
                fontSize: '15px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: '0',
                // colors: undefined
            },
        },
        legend: { 
            show: false,
            position: 'right',
            fontSize: '15px',
            fontWeight: '0',
            offsetX: 0,
            offsetY: 0,
            labels: {
                colors: [],
            },
            markers: {
                width: 10,
                height: 10,
                // fillColors: [],
                // borderRadius of marker
                radius: 5,
                size: 50,
                shape: 'sqaure',
            }
        },
        chart: {
            // toolbar: {
            //     show:true,
            //     offsetX: 50,
            //     offsetY: -170,
            //     tools: {
            //         download: true,
            //     },
            // },
            // textcolor (Not of chart elements)
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
        labels: ['EE', 'CS', 'CE', 'BME', 'ME'],
        responsive: [{
            breakpoint: 480,
        }]
    });

    return(
        <div>
        <ThemeProvider theme={theme}>    
            <SimpleCard cardTitle={props.cardTitle}>
                {props.cardLabel}
                <br></br>
                {props.cardValue}
                <ChartDiv>
                  <Chart options={options} series={options.series} type={props.chartType} height="auto" width="100%"/>
                </ChartDiv>
            </SimpleCard>
        </ThemeProvider>
        </div>
    );
}

export default PieChartCard;