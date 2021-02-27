import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Counter from './components/Counter.js'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color: "blue"}}>Yaseen</h1>
        <Greet name="SMY" className="greet"/>
        <Welcome name="LMAO" className="welcome"/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
