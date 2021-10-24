import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
    height: ${(p) => p.theme.cardHeight};
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

const SimpleCard = function({
    children,
    cardTitle,
    isPrimary,
    isAccent,
    noBottomMargin,
    ...rest
  }){
    return (
      <Card
        // hasTitle={cardTitle}
        isPrimary={isPrimary}
        isAccent={isAccent}
        noBottomMargin={noBottomMargin}
        {...rest}
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