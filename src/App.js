import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './component/header/';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';
import  { auth } from './firebase/firebase.utils';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();

    this.state =  {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>      
      </div>
    );
  }
}  

export default App;
