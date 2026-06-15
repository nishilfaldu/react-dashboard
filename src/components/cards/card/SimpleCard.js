import styled from "styled-components";

const Card = styled.div`
  height: ${(p) => p.theme.cardHeight};
  width: ${(p) => p.theme.cardWidth};
  max-width: 90vw;
  border-radius: ${(p) => p.theme.borderRadius};
  background: ${(p) => p.theme.colorCardBackground};
`;

const CardTitle = styled.div`
  justify-content: center;
  align-items: center;
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
  padding-top: ${(p) => p.theme.cardContentPaddingTop};
  padding-right: ${(p) => p.theme.cardContentPaddingRight};
  padding-bottom: ${(p) => p.theme.cardContentPaddingBottom};
  padding-left: ${(p) => p.theme.cardContentPaddingLeft};
`;

const SimpleCard = function ({ cardTitle, children }) {
  return (
    <Card>
      {cardTitle ? (
        <>
          <CardTitle>{cardTitle}</CardTitle>
          <CardContent>{children}</CardContent>
        </>
      ) : (
        children
      )}
    </Card>
  );
};

export default SimpleCard;
