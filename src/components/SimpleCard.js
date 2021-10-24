import React from 'react';
import styled, { css } from 'styled-components';

// const primary = css`
//     background: ${(p) => p.theme.colorPrimary};
//     color: ${(p) => p.theme.colorPrimaryTextColor};
// `;
const primary = css`
    background: "#8739F9";
    color: ${(p) => p.theme.colorPrimaryTextColor};
`;

const accent = css`
    background: ${(p) => p.theme.colorAccent};
    color: ${(p) => p.theme.colorAccentTextColor};
`;

const Card = styled.div`
    padding-bottom: ${(p) => (p.theme.paddingBottomCard)};
    padding-top: ${(p) => (p.theme.paddingBottomCard)};
    padding-right: ${(p) => (p.theme.paddingBottomCard)};
    padding-left: ${(p) => (p.theme.paddingBottomCard)};
    margin-top: ${(p) => p.theme.marginTop};
    margin-left: ${(p) => p.theme.marginLeft};
    margin-right: ${(p) => p.theme.marginRight};
    margin-bottom: ${(p) => p.theme.marginBottom};
    border-radius: ${(p) => p.theme.borderRadius};
    background: ${(p) => p.theme.colorCardBackground};
    color: ${(p) => p.theme.colorText};

    ${(p) => p.isPrimary && primary};
    ${(p) => p.isAccent && accent};
`;

const CardContent = styled.div`
    padding: 0rem 0rem 5rem 0rem;
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(p) => p.theme.cardTitleHeight};
    padding: 0 ${(p) => p.theme.lenMd1};
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