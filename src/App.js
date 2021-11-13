import './App.css';
import BarChartCard from './components/BarChartCard';
import PieChartCard from './components/PieChartCard';
import IconFigureCard from './components/IconFigureCard';
import BadgeFigureCard from './components/BadgeFigureCard';
import SchoolIcon from '@mui/icons-material/School';
import FemaleIcon from '@mui/icons-material/Female';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function App() {
  return (
    <div className="App">
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
      <BadgeFigureCard></BadgeFigureCard>
      <PieChartCard cardTitle="Education" cardLabel="Today" cardValue="250"></PieChartCard>
    </div>
  );
}

export default App;
