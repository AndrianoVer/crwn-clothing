import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './component/header/';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';


function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>      
    </div>
  );
}

export default App;
