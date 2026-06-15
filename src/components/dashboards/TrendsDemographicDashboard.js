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

const TrendsDemographicDashboard = function ({ data }) {
  return (
    <Row>
      <PieChartCard
        cardTitle="Gender"
        cardLabel="Female"
        cardValue="5"
        chartType="pie"
        labelData={data.labelGenders}
        seriesData={data.seriesGender}
      />
      <BarChartCard
        cardTitle="Age"
        cardLabel="Current"
        cardValue="18+"
        labelData={data.labelAges}
        seriesData={data.seriesAge}
      />
      <PieChartCard
        cardTitle="Ethnicities"
        cardLabel="Count"
        cardValue="7"
        chartType="pie"
        labelData={data.labelEthnicities}
        seriesData={data.seriesEthnicities}
      />
    </Row>
  );
};

export default TrendsDemographicDashboard;
