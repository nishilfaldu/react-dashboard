import { useState } from "react";
import styled from "styled-components";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SchoolIcon from "@mui/icons-material/School";
import Tab from "../menus/Tab";
import Carousel from "../carousel/Carousel";
import CarouselItem from "../carousel/CarouselItem";
import TrendsParticipationChart from "../dashboards/TrendsParticipationChart";
import TrendsDemographicDashboard from "../dashboards/TrendsDemographicDashboard";
import TrendsEducationDashboard from "../dashboards/TrendsEducationDashboard";
import Navbar from "../navbar/Navbar";
import participationData from "../../assets/data/trends/participation";
import demographicData from "../../assets/data/trends/demographic";
import logosData from "../../assets/data/images/logos";
import educationData from "../../assets/data/trends/education";

const TabRow = styled.div`
  display: flex;
  position: relative;
  top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  padding-left: var(--sidebar-width);
`;

// Render a carousel of per-event dashboards, one slide per RevolutionUC logo.
const carouselFor = (Dashboard, dataset) => (
  <Carousel marginTopCarouselItem="2rem">
    {Object.keys(logosData).map((key, index) => (
      <CarouselItem
        key={index}
        src={logosData[key]["imgUrl"]}
        alt={logosData[key]["imgAlt"]}
      >
        <Dashboard data={dataset[key]} />
      </CarouselItem>
    ))}
  </Carousel>
);

const TrendsPage = function () {
  const tabButtonProps = {
    forLabel: ["participation", "demographics", "education"],
    textLabel: ["Participation", "Demographics", "Education"],
    buttonIcon: [<PeopleAltIcon />, <AnalyticsIcon />, <SchoolIcon />],
  };

  const [data, setData] = useState("participation");

  let toRender;
  if (data === "demographics") {
    toRender = carouselFor(TrendsDemographicDashboard, demographicData);
  } else if (data === "education") {
    toRender = carouselFor(TrendsEducationDashboard, educationData);
  } else {
    toRender = <TrendsParticipationChart data={participationData} />;
  }

  return (
    <div>
      <Navbar />
      <TabRow>
        <Tab onClick={setData} tabButtonAttributes={tabButtonProps} />
      </TabRow>
      {toRender}
    </div>
  );
};

export default TrendsPage;
