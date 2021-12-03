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
`

const LiveDashboard = function(props){
    return(
        <div>
            <StyledRow>
                <BadgeFigureCard LabelOne="Registrants"
                                ValueOne="500"
                                LabelTwo="Participants"
                                ValueTwo="500">
                </BadgeFigureCard>
                <IconFigureCard cardTitle="Schools" cardValue={props.cardValue} Icon={
                                            <SchoolIcon sx={{ fontSize: 60, color: 'white' }}/>
                                            }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="States" cardValue="50" Icon={
                                        <LanguageIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
            </StyledRow>

            <StyledRow>
                <IconFigureCard cardTitle="Countries" cardValue="50" Icon={
                                            <PublicIcon sx={{ fontSize: 60, color: 'white' }}/>
                                            }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Lattice" cardValue="200" Icon={
                                        <PeopleAltIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Females" cardValue="200" Icon={
                                        <FemaleIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Discord" cardValue="50" Icon={
                                        <ForumIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
            </StyledRow>

            <StyledRow>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="250" chartType={'pie'}></PieChartCard>
                <BarChartCard cardTitle="Registrants" cardLabel="Today" cardValue="250"></BarChartCard>
                <PieChartCard cardTitle="Education" cardLabel="Majors" cardValue="250" chartType={'pie'}></PieChartCard>
            </StyledRow>
        </div>
    );
}

export default LiveDashboard;