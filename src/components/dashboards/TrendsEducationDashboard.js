import styled from "styled-components";
import BarChartCard from "../cards/charts/BarChartCard";
import PieChartCard from "../cards/charts/PieChartCard";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding-left: var(--sidebar-width);
  padding-top: 3rem;
`;

const TrendsEducationDashboard = function ({ data }) {
  return (
    <Row>
      <PieChartCard
        cardTitle="Degrees"
        cardLabel="Count"
        cardValue="4"
        chartType="pie"
        labelData={data.labelDegrees}
        seriesData={data.seriesDegrees}
      />
      <BarChartCard
        cardTitle="Hackathon Experience"
        cardLabel="Count"
        cardValue="250"
        labelData={data.hackExperience}
        seriesData={data.seriesHackExperience}
      />
      <PieChartCard
        cardTitle="Majors"
        cardLabel="Count"
        cardValue="4"
        chartType="pie"
        labelData={data.labelMajors}
        seriesData={data.seriesMajors}
      />
    </Row>
  );
};

export default TrendsEducationDashboard;
