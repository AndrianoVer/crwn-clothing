import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>      
    </div>
  );
}

export default App;
