import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyles } from './global.styles';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';

import Spinner from './components/spinner/spinner.component';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.component'));
const ShopPage = lazy(() => import('./pages/Shop/Shop.component'));
const SignInSignUp = lazy(() => import('./pages/SignIn-SignUp/SignIn-SignUp.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/Checkout.component'));



const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
