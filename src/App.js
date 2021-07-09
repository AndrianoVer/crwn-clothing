import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage';


const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )  
};

// export default HatsPage;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>      
    </div>
  );
}

export default App;
