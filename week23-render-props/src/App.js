import logo from './logo.svg';
import './App.css';
import { WeatherState } from './components/WeatherState';

function App() {
  return (
    <>
      <h1>Weather by country..</h1>
      <div>
        <h3>Korea</h3>
        <WeatherState />
        <h3>Japan</h3>
        <WeatherState />
      </div>
    </>
  );
}

export default App;
