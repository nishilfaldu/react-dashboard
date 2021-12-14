import styled from 'styled-components';
import PieChartCard from '../cards/charts/PieChartCard';
import BadgeFigureCard from '../cards/figures/BadgeFigureCard';
import IconFigureCard from '../cards/figures/IconFigureCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PublishIcon from '@mui/icons-material/Publish';
import FemaleIcon from '@mui/icons-material/Female';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SchoolIcon from '@mui/icons-material/School';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`
// const StyledRow = styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     padding-bottom: 1rem;
//     padding-left: 15rem;
// `

const YearlyDashboard = function(props){
    return(
        <div>
            <StyledRow>
                <BadgeFigureCard LabelOne="Registrants"
                                ValueOne={props.data.numRegistrants}
                                LabelTwo="Participants"
                                ValueTwo={props.data.numParticipants}>
                </BadgeFigureCard>
                <IconFigureCard cardTitle="Schools" cardValue={props.data.numSchools} Icon={
                                            <SchoolIcon sx={{ fontSize: 60, color: 'white' }}/>
                                            }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="States" cardValue={props.data.numStates} Icon={
                                        <AutoAwesomeIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
            </StyledRow>

            <StyledRow>
                <IconFigureCard cardTitle="Sponsors" cardValue={props.data.numSponsors} Icon={
                                            <AttachMoneyIcon sx={{ fontSize: 60, color: 'white' }}/>
                                            }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Submissions" cardValue={props.data.numSubmissions} Icon={
                                        <PublishIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Females" cardValue={props.data.numFemales} Icon={
                                        <FemaleIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Confirmed" cardValue={props.data.numConfirmed} Icon={
                                        <HowToRegIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
            </StyledRow>

            <StyledRow>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="7" chartType={'pie'} labelData={props.data.labelAges} seriesData={props.data.seriesAge}></PieChartCard>
                <PieChartCard cardTitle="Gender" cardLabel="Female" cardValue={props.data.numMajors} chartType={'pie'} labelData={props.data.labelGenders} seriesData={props.data.seriesGenders}></PieChartCard>
                <PieChartCard cardTitle="Majors" cardLabel="Count" cardValue="50" chartType={'pie'} labelData={props.data.labelMajors} seriesData={props.data.seriesMajors}></PieChartCard>
            </StyledRow>

            {/* <StyledRow>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue={props.ethnicityVal} chartType={'pie'}></PieChartCard>
                <BarChartCard cardTitle="Countries" cardLabel="Count" cardValue={props.countriesVal}></BarChartCard>
                <PieChartCard cardTitle="Education Levels" cardLabel="Degrees" cardValue={props.degreesVal} chartType={'pie'}></PieChartCard>
            </StyledRow>

            <StyledRow>
                <BarChartCard cardTitle="Majors" cardLabel="Count" cardValue={props.majorsVal}></BarChartCard>
                <PieChartCard cardTitle="Gender" cardLabel="Female" cardValue={props.genderVal} chartType={'donut'}></PieChartCard>
                <BarChartCard cardTitle="Hackathon Experience" cardLabel="Count" cardValue={props.hackExperienceVal}></BarChartCard>
            </StyledRow> */}
            {/* <SparklineCard></SparklineCard> */}
        </div>
    );
}

export default YearlyDashboard;