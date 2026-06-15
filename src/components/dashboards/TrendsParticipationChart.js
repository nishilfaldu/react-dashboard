import styled from "styled-components";
import LineChartCard from "../cards/charts/LineChartCard";

const Row = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-left: var(--sidebar-width);
`;

const TrendsParticipationChart = function ({ data }) {
  return (
    <Row>
      <LineChartCard
        cardTitle="Experience"
        cardLabel="Hackathons"
        cardValue="10"
        seriesData={data}
      />
    </Row>
  );
};

export default TrendsParticipationChart;
