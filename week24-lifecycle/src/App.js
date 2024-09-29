//App.js
import logo from './logo.svg';
import './App.css';
import PropsTestParentComponent from './components/PropsTestParentComponent';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className='App'>
      <MyComponent name={'inyoung'}/>
    </div>
  );
}

export default App;
