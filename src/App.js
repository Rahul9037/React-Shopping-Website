import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/Shop/Shop.component';
import Header from "./components/header/header.component";
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp.component';
import CheckoutPage from './pages/checkout/Checkout.component';
import { connect } from 'react-redux';
import { checkUserSession} from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
 
class App extends Component {
  
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession()
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render= { () => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInSignUp />)}/>
          <Route exact path="/checkout" component={CheckoutPage}/> 
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
