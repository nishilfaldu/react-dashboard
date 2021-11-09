import './App.css';
import BarChartCard from './components/BarChartCard';
import PieChartCard from './components/PieChartCard';
import IconFigureCard from './components/IconFigureCard';
import SchoolIcon from '@mui/icons-material/School';

function App() {
  return (
    <div className="App">
      <BarChartCard></BarChartCard>
      <PieChartCard></PieChartCard>
      <IconFigureCard cardTitle="Schools" cardValue="200" schoolIcon={
                                  <SchoolIcon sx={{ fontSize: 60, color: 'white' }}/>
                                  }> 
      </IconFigureCard>
    </div>
  );
}

export default App;
