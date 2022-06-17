import './assets/css/App.css';
import NavBar from './components/NavBar.jsx';
import WeatherPanel from './components/WeatherPanel.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WeatherPanel/>
    </div>
  );
}

export default App;
