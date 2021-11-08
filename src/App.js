import './App.css';
import BarChartCard from './components/BarChartCard';
import PieChartCard from './components/PieChartCard';
import IconFigureCard from './components/IconFigureCard';

function App() {
  return (
    <div className="App">
      <BarChartCard></BarChartCard>
      <PieChartCard></PieChartCard>
      <IconFigureCard></IconFigureCard>
    </div>
  );
}

export default App;
