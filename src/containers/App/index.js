/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import LcStorage from '../../utils/LcStorage'
import { ToastContainer } from 'react-toastify';
import Dashboard from '../Dashboard/Loadable';
import NotFoundPage from "../NotFoundPage";
import '../../components/css/index.css';

const ProtectedRoute = ({component: Component, ...rest}) => {
   return <Route {...rest} render={props=> LcStorage.get('token')?<Component {...props} /> : <Redirect to={"/login"} />} />
}

const PublicRoute = ({component: Component, ...rest}) => <Route {...rest} render={props=> !LcStorage.get('token')?<Component {...props} /> : <Redirect to={"/login"} />} />


export default function App() {
  return (
      <div className="h-100">
          <ToastContainer autoClose={5000}  />
          <Switch>
                <Route exact path="/" component={Dashboard} />
                
                {/* Public Routes */}
                    {/* <PublicRoute exact path="/login" component={Login} />
                    <PublicRoute exact path="/register" component={Register} />
                    <PublicRoute exact path="/forgot-password" component={ForgotPassword} />
                    <PublicRoute exact path="/:token/reset-password" component={ResetPassword} />
                    <PublicRoute exact path="/reset-password-confirmation" component={ResetPasswordConfirmation} /> */}
                
                {/* Protected Routes */}
                    {/* <ProtectedRoute exact path={"/users"} component={Users} />
                    <ProtectedRoute exact path="/users/add" component={AddUser} />
                    <ProtectedRoute exact path="/users/edit/:id" component={EditUser} /> */}
              <Route path="*" component={NotFoundPage} />
          </Switch>
      </div>
  );
}
