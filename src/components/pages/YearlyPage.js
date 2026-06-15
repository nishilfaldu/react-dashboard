import YearlyDashboard from "../dashboards/YearlyDashboard";
import Navbar from "../navbar/Navbar";
import annualData from "../../assets/data/annual/annual";
import Carousel from "../carousel/Carousel";
import logosData from "../../assets/data/images/logos";
import CarouselItem from "../carousel/CarouselItem";

const YearlyPage = function () {
  return (
    <div>
      <Navbar />
      <Carousel marginTopCarouselItem="-2rem">
        {Object.keys(logosData).map((key, index) => (
          <CarouselItem
            key={index}
            src={logosData[key]["imgUrl"]}
            alt={logosData[key]["imgAlt"]}
          >
            <YearlyDashboard data={annualData[key]} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default YearlyPage;
