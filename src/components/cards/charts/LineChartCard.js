import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SimpleCard from "../card/SimpleCard";
import theme from "../../themes/propLineChart"
import Chart from 'react-apexcharts';
import { useState } from "react";

const ChartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LineChartCard = function(props){

    const [options, setOptions] = useState({
        series: [
            {
                name: 'Registrants',
                data: [45, 52, 38, 24, 33, 26, 21, 20]
            },
            {
                name: 'Participants',
                data: [35, 41, 62, 42, 13, 18, 29, 37]
            },
            {
                name: 'Submissions',
                data: [87, 57, 74, 99, 75, 38, 62, 47]
            },
            {
                name: 'Sponsors',
                data: [99, 123, 63, 94, 70, 44, 32, 94]
            }
        ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar: {
                show: false
            },
            foreColor: '#ffffff',
            fontFamily: 'Helvetica, Arial, sans-serif',
            // fontSize: 'px',
        },
        dataLabels: {
            enabled: false
        },
        // title: {
        //     text: 'Page Statistics',
        //     align: 'left'
        // },
        legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            },
            show: true,
            position: 'bottom',
            fontSize: '14px',
            offsetY: 8,
            labels: {
                colors: [],
            },
            markers: {
                width: 15,
                height: 15,
                // fillColors: [],
                // borderRadius of marker
                radius: 7,
                size: 50,
                shape: 'circle',
            }
        },
        xaxis: {
            categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        },
        grid: {
            show: false,
            borderColor: '#f1f1f1',
        },  
        
    });

    return(
        <div>
            <ThemeProvider theme={theme}>
                <SimpleCard cardTitle={props.cardTitle}>
                    {props.cardLabel}
                    <br></br>
                    {props.cardValue}
                    <ChartDiv>
                        <Chart options={options} series={options.series} height="200%" width="300%"/>
                    </ChartDiv>
                </SimpleCard>
            </ThemeProvider>
        </div>
    );
}

export default LineChartCard;