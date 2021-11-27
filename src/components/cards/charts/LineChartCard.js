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
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                },
                title: {
                    text: 'RevolutionUC Statistics',
                    align: 'left'
                },
                legend: {
                    tooltipHoverFormatter: function(val, opts) {
                      return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                    }
                },
                markers: {
                    size: 0,
                    hover: {
                      sizeOffset: 6
                    }
                },
                grid: {
                    row: {
                      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                      opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                  }
                },
            }
        }
    });
}