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
                data: props.seriesData.seriesRegistrants
            },
            {
                name: 'Participants',
                data: props.seriesData.seriesParticipants
            },
            {
                name: 'Submissions',
                data: props.seriesData.seriesSubmissions
            },
            {
                name: 'Sponsors',
                data: props.seriesData.seriesSponsors
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
            offsetY: 30,
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
                offsetX: 0,
                offsetY: 0
            }
        },
        xaxis: {
            categories: props.seriesData.seriesHackCategories,
        },
        grid: {
            show: false,
            borderColor: '#f1f1f1',
        },
        tooltip: { enabled: true,
            x : {
              show: true,
            },
            theme: 'dark',
            // y: {
            //   formatter: function (val) {
            //     return val + " hackers"
            //   }
            // }
         }  
        
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