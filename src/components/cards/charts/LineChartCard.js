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
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: 'Page Statistics',
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
          xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
              '10 Jan', '11 Jan', '12 Jan'
            ],
          },
        //   grid: {
        //     borderColor: '#f1f1f1',
        //   }  
    });

    return(
        <div>
            <ThemeProvider theme={theme}>
                <SimpleCard cardTitle={props.cardTitle}>
                    {props.cardLabel}
                    <br></br>
                    {props.cardValue}
                    <ChartDiv>
                        <Chart options={options} series={options.series} height="auto" width="200%"/>
                    </ChartDiv>
                </SimpleCard>
            </ThemeProvider>
        </div>
    );
}

export default LineChartCard;