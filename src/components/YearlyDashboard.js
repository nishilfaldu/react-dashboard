import BarChartCard from './BarChartCard';
import PieChartCard from './PieChartCard';
import IconFigureCard from './IconFigureCard';
import BadgeFigureCard from './BadgeFigureCard';
import SchoolIcon from '@mui/icons-material/School';
import FemaleIcon from '@mui/icons-material/Female';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`

const YearlyDashboard = function(){
    return(
        <div>
            <StyledRow>
                <IconFigureCard cardTitle="Schools" cardValue="200" Icon={
                                            <SchoolIcon sx={{ fontSize: 60, color: 'white' }}/>
                                            }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Females" cardValue="200" Icon={
                                        <FemaleIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="States" cardValue="50" Icon={
                                        <LanguageIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Cities" cardValue="50" Icon={
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
                <BadgeFigureCard LabelOne="Registrants"
                                ValueOne="500"
                                LabelTwo="Participants"
                                ValueTwo="500">
                </BadgeFigureCard>
            </StyledRow>

            <StyledRow>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="250"></PieChartCard>
                <BarChartCard cardTitle="Registrants" cardLabel="Today" cardValue="250"></BarChartCard>
                <PieChartCard cardTitle="Education" cardLabel="Degrees" cardValue="250"></PieChartCard>
            </StyledRow>
        </div>
    );
}

export default YearlyDashboard;