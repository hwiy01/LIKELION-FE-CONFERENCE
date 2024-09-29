//App.js
import logo from './logo.svg';
import './App.css';
import PropsTestParentComponent from './components/PropsTestParentComponent';
import MyComponent from './components/MyComponent';
import LionComponent from './components/LionComponent';

function App() {
  return (
    <div className='App'>
      <MyComponent name={'inyoung'}/>
      <LionComponent/>
    </div>
  );
}

export default App;
