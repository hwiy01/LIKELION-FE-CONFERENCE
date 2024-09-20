import logo from './logo.svg';
import './App.css';
import { Korea } from './components/Korea';
import { Japan } from './components/Japan';

function App() {
  return (
    <>
      <h1>Weather by country..</h1>
      <div>
          <Korea />
          <Japan />
      </div>
    </>
  );
}

export default App;
