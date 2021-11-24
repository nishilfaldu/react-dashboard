import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Chart from 'react-apexcharts';
import { useState } from 'react';

const Some = styled.div`
    background-image: "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
`

const SparklineCard = function(props){

    const [options, setOptions] = useState({
        chart: {
            id: 'spark1',
            group: 'sparks',
            type: 'line',
            height: 80,
            sparkline: {
              enabled: true
            },
            dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 2,
              opacity: 0.2,
            }
          },
          series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
          }],
          stroke: {
            curve: 'smooth'
          },
          markers: {
            size: 0
          },
          grid: {
            padding: {
              top: 20,
              bottom: 10,
              left: 110
            }
          },
          colors: ['#fff'],
          tooltip: {
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function formatter(val) {
                  return '';
                }
              }
            }
          }
    });

    return(
        <div style={{background: "black"}}>
            <Some>
            <Chart options={options} series={options.series} type="line" height="auto" width="100%"/>
            </Some>
        </div>
    );
}

export default SparklineCard;
