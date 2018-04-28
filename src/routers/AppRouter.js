import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>

      <Switch>
        <Route path="/" component={DashboardPage}  />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
