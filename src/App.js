import './App.css';
import YearlyDashboard from './components/YearlyDashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NavButton from './components/NavButton';
import NavRoutes from './components/router/NavRoutes';

function App() {
  return (
    <div className="App">
      <NavRoutes></NavRoutes>
    </div>
    
  );
}

export default App;
