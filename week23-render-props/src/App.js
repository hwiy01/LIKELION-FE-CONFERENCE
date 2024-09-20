import logo from './logo.svg';
import './App.css';
import { WeatherState } from './components/WeatherState';

function App() {
  return (
    <>
      <h1>Today's weather ...</h1>
      <WeatherState />
    </>
  );
}

export default App;
