import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import FemaleIcon from "@mui/icons-material/Female";
import PublicIcon from "@mui/icons-material/Public";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ForumIcon from "@mui/icons-material/Forum";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BarChartCard from "../cards/charts/BarChartCard";
import PieChartCard from "../cards/charts/PieChartCard";
import IconFigureCard from "../cards/figures/IconFigureCard";
import BadgeFigureCard from "../cards/figures/BadgeFigureCard";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
  padding-left: var(--sidebar-width);
`;

const iconStyle = { fontSize: 60, color: "white" };

const LiveDashboard = function ({ data }) {
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
          cardTitle="Countries"
          cardValue={data.numCountries}
          Icon={<PublicIcon sx={iconStyle} />}
        />
        <IconFigureCard
          cardTitle="Lattice"
          cardValue={data.numUsersLattice}
          Icon={<PeopleAltIcon sx={iconStyle} />}
        />
        <IconFigureCard
          cardTitle="Females"
          cardValue={data.numFemales}
          Icon={<FemaleIcon sx={iconStyle} />}
        />
        <IconFigureCard
          cardTitle="Discord"
          cardValue={data.numUsersDiscord}
          Icon={<ForumIcon sx={iconStyle} />}
        />
      </Row>

      <Row>
        <BarChartCard
          cardTitle="Age"
          cardLabel="Current"
          cardValue="18+"
          labelData={data.labelAges}
          seriesData={data.seriesAge}
        />
        <PieChartCard
          cardTitle="Education"
          cardLabel="Majors"
          cardValue={data.numMajors}
          chartType="pie"
          labelData={data.labelMajors}
          seriesData={data.seriesMajors}
        />
        <BarChartCard
          cardTitle="Hackathon Experience"
          cardLabel="Count"
          cardValue={data.totalHackathons}
          labelData={data.labelHackExperience}
          seriesData={data.seriesHackExperience}
        />
      </Row>
    </div>
  );
};

export default LiveDashboard;
