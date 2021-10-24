import React from 'react';
import styled, { css } from 'styled-components';
import Chart from 'react-apexcharts';
import { useState } from 'react';

const Card = styled.div`
    height: ${(p) => p.theme.cardHeight};
    // width: 25rem;
    padding: ${(p) => (p.theme.paddingCard)};
    margin-top: ${(p) => p.theme.marginTopCard};
    margin-left: ${(p) => p.theme.marginLeftCard};
    margin-right: ${(p) => p.theme.marginRightCard};
    margin-bottom: ${(p) => p.theme.marginBottomCard};
    border-radius: ${(p) => p.theme.borderRadius};
    background: ${(p) => p.theme.colorCardBackground};
    color: ${(p) => p.theme.colorText};
`;

const CardContent = styled.div`
    padding: 0rem 0rem 5rem 0rem;
    font-size: ${(p) => p.theme.cardContentFontSize};
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem ${(p) => p.theme.lenMd1};
    color: ${(p) => p.theme.colorLabel};
    font-size: ${(p) => p.theme.cardTitleFontSize};
`;

const ChartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SimpleCard = function({
    series,
    children,
    cardTitle,
    isPrimary,
    isAccent,
    noBottomMargin,
    ...rest
  }){

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

    return (
      <Card
      >
        {cardTitle && (
          <>
            <CardTitle>{cardTitle}</CardTitle>
            <CardContent>{children}</CardContent>
            <ChartDiv>
                <Chart options={options} series={series} type="bar" height="auto" width="100%"/>
            </ChartDiv>
          </>
        )}
        {!cardTitle && children}
      </Card>
    );
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default SimpleCard;