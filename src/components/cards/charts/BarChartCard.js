import React from "react";
import styled, { ThemeProvider } from "styled-components";
import SimpleCard from "../card/SimpleCard";
import theme from "../../themes/propBarChart"
import Chart from 'react-apexcharts';
import { useState } from "react";

const ChartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const BarChartCard = function(props){

  const [options, setOptions] = useState({
    colors: ['#5B9EF5', '#7EE4AB', '#F5BF60', '#EE6E7B', '#8876D1', '#72838D', '#6CB1A9', '#C94BE5'],
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        speed: 1000,
      },
      stacked: true,
      zoom: { enabled: false },
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: -4,
        bottom: -6,
        left: -10,
      },
    },
    stroke: {
      show: false,
    },
    plotOptions: {
      bar: {
        barHeight: "50%",
      },
    },
    tooltip: { enabled: true,
      x : {
        show: true,
      },
      theme: 'dark',
      y: {
        formatter: function (val) {
          return val + " hackers"
        }
      } },
    legend: { show: false },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['<18','18','19','20','21','22','23','23+'],
      floating: true,
      labels: {
        show: false,
        offsetY: -10,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      maxHeight: 0,
    },
    yaxis: {
      floating: true,
      offsetX: -20,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  });

  const series = [
      // {
      //   name: "series1",
      //   data: [10, 35, 40, 45, 40, 35, 10],
      // },
      {
        name: "Count",
        data: [30, 100, 35, 110, 40, 56, 100, 65],
      },
    ];

    return (
      <div>
        <ThemeProvider theme={theme}>    
            <SimpleCard cardTitle={props.cardTitle}>
                {props.cardLabel}
                <br></br>
                {props.cardValue}
                <ChartDiv>
                  <Chart options={options} series={series} type="bar" height="auto" width="100%"/>
                </ChartDiv>
            </SimpleCard>
        </ThemeProvider>
      </div>
    );
};

export default BarChartCard;