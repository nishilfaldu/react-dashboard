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

const SmallComponentsRow = styled.div`
    display: flex;
    
`

const StatsDashboard = function(){
    return(
        <div>
            <BarChartCard></BarChartCard>
            <PieChartCard cardTitle="Ethnicities" cardLabel="Today" cardValue="250"></PieChartCard>
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
                                ValueTwo="500"></BadgeFigureCard>
            <PieChartCard cardTitle="Education" cardLabel="Today" cardValue="250"></PieChartCard>
        </div>
    );
}

export default StatsDashboard;