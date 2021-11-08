import React from "react";
import styled, { ThemeProvider, css } from "styled-components";
import SimpleCard from "./SimpleCard.js";
import theme from "../styling-properties/propBarChart"
import Chart from 'react-apexcharts';
import { useState } from "react";

const ChartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const BarChartCard = function(){

  const [options, setOptions] = useState({
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
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
    tooltip: { enabled: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    xaxis: {
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
      {
        name: "series1",
        data: [10, 35, 10, 44, 10, 10, 20, 30, 35, 10, 44, 10, 20, 30],
      },
      {
        name: "series2",
        data: [30, 45, 35, 10, 64, 10, 40, 30, 35, 10, 44, 10, 20, 10],
      },
    ];

    return (
      <div>
        <ThemeProvider theme={theme}>    
            <SimpleCard cardTitle="Registrants">
                Today
                <br></br>
                250
                <ChartDiv>
                  <Chart options={options} series={series} type="bar" height="auto" width="100%"/>
                </ChartDiv>
            </SimpleCard>
        </ThemeProvider>
      </div>
    );
};

export default BarChartCard;