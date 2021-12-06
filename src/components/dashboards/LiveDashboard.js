import BarChartCard from '../cards/charts/BarChartCard';
import PieChartCard from '../cards/charts/PieChartCard';
import IconFigureCard from '../cards/figures/IconFigureCard';
import BadgeFigureCard from '../cards/figures/BadgeFigureCard';
import SchoolIcon from '@mui/icons-material/School';
import FemaleIcon from '@mui/icons-material/Female';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ForumIcon from '@mui/icons-material/Forum';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
    padding-left: 15rem;
`

const LiveDashboard = function(props){
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
                                        <LanguageIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
            </StyledRow>

            <StyledRow>
                <IconFigureCard cardTitle="Countries" cardValue={props.data.numCountries} Icon={
                                            <PublicIcon sx={{ fontSize: 60, color: 'white' }}/>
                                            }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Lattice" cardValue={props.data.numUsersLattice} Icon={
                                        <PeopleAltIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Females" cardValue={props.data.numFemales} Icon={
                                        <FemaleIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Discord" cardValue={props.data.numUsersDiscord} Icon={
                                        <ForumIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
            </StyledRow>

            <StyledRow>
                {/* <PieChartCard cardTitle="Gender" cardLabel="Count" cardValue="250" chartType={'donut'}></PieChartCard> */}
                <BarChartCard cardTitle="Age" cardLabel="Current" cardValue="18+" labelData={props.data.labelAges} seriesData={props.data.seriesAge}></BarChartCard>
                <PieChartCard cardTitle="Education" cardLabel="Majors" cardValue={props.data.numMajors} chartType={'pie'} labelData={props.data.labelMajors} seriesData={props.data.seriesMajors}></PieChartCard>
                <BarChartCard cardTitle="Hackathon Experience" cardLabel="Count" cardValue={props.data.totalHackathons} labelData={props.data.labelHackExperience} seriesData={props.data.seriesHackExperience}></BarChartCard>
            </StyledRow>
        </div>
    );
}

export default LiveDashboard;