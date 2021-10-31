import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
    height: ${(p) => p.theme.cardHeight};
    width: ${(p) => p.theme.cardWidth};
    border-radius: ${(p) => p.theme.borderRadius};
    background: ${(p) => p.theme.colorCardBackground};
`;

const CardTitle = styled.div`
    padding-top: ${(p) => p.theme.cardTitlePaddingTop};
    padding-right: ${(p) => p.theme.cardTitlePaddingRight};
    padding-bottom: ${(p) => p.theme.cardTitlePaddingBottom}; 
    padding-left: ${(p) => p.theme.cardTitlePaddingLeft};
    color: ${(p) => p.theme.colorTitle};
    font-size: ${(p) => p.theme.cardTitleFontSize};
`;

const CardContent = styled.div`
    font-size: ${(p) => p.theme.cardContentFontSize};
    color: ${(p) => p.theme.colorContent};
`;

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