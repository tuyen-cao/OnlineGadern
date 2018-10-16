/**
 * Created by tuyencaok on 8/13/2018.
 */
import React from "react";
import {Switch, Route} from "react-router-dom";
import { history } from '../helpers';
import PrivateRoute from '../components';
import LoginPage from "./pages/login";
import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";

const Router = () => {
  return (
    <Switch>
      {/*<Route exact path='/login' component={LoginPage}></Route>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/cart' component={CartPage}></Route>*/}
      <Router history={history}>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/cart" component={CartPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    </Switch>
  )
}
export default Router;