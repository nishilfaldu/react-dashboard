import { useState } from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LiveDashboard from "../dashboards/LiveDashboard";
import Tab from "../menus/Tab";
import Navbar from "../navbar/Navbar";
import registeredData from "../../assets/data/live/registered";
import confirmedData from "../../assets/data/live/confirmed";
import checkedinData from "../../assets/data/live/checkedin";

const TabRow = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  padding-left: var(--sidebar-width);
`;

const dataSources = {
  registered: registeredData,
  confirmed: confirmedData,
  checkedin: checkedinData,
};

const LivePage = function () {
  const tabButtonProps = {
    forLabel: ["registered", "confirmed", "checkedin"],
    textLabel: ["Registered", "Confirmed", "Checked In"],
    buttonIcon: [<PersonAddAlt1Icon />, <HowToRegIcon />, <CheckIcon />],
  };

  const [data, setData] = useState("registered");

  return (
    <div>
      <Navbar />
      <TabRow>
        <Tab onClick={setData} tabButtonAttributes={tabButtonProps} />
      </TabRow>
      <LiveDashboard data={dataSources[data]} />
    </div>
  );
};

export default LivePage;
