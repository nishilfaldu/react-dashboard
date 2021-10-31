import React from 'react';
import styled, { css } from 'styled-components';
import Chart from 'react-apexcharts';
import { useState } from 'react';

const Card = styled.div`
    height: ${(p) => p.theme.cardHeight};
    width: ${(p) => p.theme.cardWidth};
    border-radius: ${(p) => p.theme.borderRadius};
    background: ${(p) => p.theme.colorCardBackground};
`;

const CardContent = styled.div`
    padding: 0rem 0rem 5rem 0rem;
    font-size: ${(p) => p.theme.cardContentFontSize};
    color: ${(p) => p.theme.colorText};
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: ${(p) => p.theme.colorLabel};
    font-size: ${(p) => p.theme.cardTitleFontSize};
`;

const ChartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SimpleCard = function(
    {cardTitle, children}
  ){

    return (
      <Card
      >
        {cardTitle && (
          <>
            <CardTitle>{cardTitle}</CardTitle>
            <CardContent>{children}</CardContent>
          </>
        )}
        {!cardTitle && children}
      </Card>
    );
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default SimpleCard;