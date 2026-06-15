import styled from "styled-components";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublishIcon from "@mui/icons-material/Publish";
import FemaleIcon from "@mui/icons-material/Female";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SchoolIcon from "@mui/icons-material/School";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PieChartCard from "../cards/charts/PieChartCard";
import BadgeFigureCard from "../cards/figures/BadgeFigureCard";
import IconFigureCard from "../cards/figures/IconFigureCard";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
  padding-left: var(--sidebar-width);
`;

const iconStyle = { fontSize: 60, color: "white" };

const YearlyDashboard = function ({ data }) {
  return (
    <div>
      <Row>
        <BadgeFigureCard
          LabelOne="Registrants"
          ValueOne={data.numRegistrants}
          LabelTwo="Participants"
          ValueTwo={data.numParticipants}
        />
        <IconFigureCard
          cardTitle="Schools"
          cardValue={data.numSchools}
          Icon={<SchoolIcon sx={iconStyle} />}
        />
        <IconFigureCard
          cardTitle="States"
          cardValue={data.numStates}
          Icon={<AutoAwesomeIcon sx={iconStyle} />}
        />
      </Row>

      <Row>
        <IconFigureCard
          cardTitle="Sponsors"
          cardValue={data.numSponsors}
          Icon={<AttachMoneyIcon sx={iconStyle} />}
        />
        <IconFigureCard
          cardTitle="Submissions"
          cardValue={data.numSubmissions}
          Icon={<PublishIcon sx={iconStyle} />}
        />
        <IconFigureCard
          cardTitle="Females"
          cardValue={data.numFemales}
          Icon={<FemaleIcon sx={iconStyle} />}
        />
        <IconFigureCard
          cardTitle="Confirmed"
          cardValue={data.numConfirmed}
          Icon={<HowToRegIcon sx={iconStyle} />}
        />
      </Row>

      <Row>
        <PieChartCard
          cardTitle="Ethnicities"
          cardLabel="Count"
          cardValue="7"
          chartType="pie"
          labelData={data.labelEthnicities}
          seriesData={data.seriesEthnicities}
          pieWidth="100%"
        />
        <PieChartCard
          cardTitle="Gender"
          cardLabel="Female"
          cardValue="50"
          chartType="pie"
          labelData={data.labelGenders}
          seriesData={data.seriesGenders}
          pieWidth="100%"
        />
        <PieChartCard
          cardTitle="Majors"
          cardLabel="Count"
          cardValue={data.numMajors}
          chartType="pie"
          labelData={data.labelMajors}
          seriesData={data.seriesMajors}
          pieWidth="100%"
        />
      </Row>
    </div>
  );
};

export default YearlyDashboard;
