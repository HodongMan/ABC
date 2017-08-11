import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {Nav, ScheduleForm, MoneyCount, TripList, DivideResult} from './components';

const routes = (
    <Router history={browserHistory}>
        <Route path="/"component={Nav}>
            <IndexRoute component={TripList}/>
            <Route path="/form" component={ScheduleForm} />
            <Route path="/detail" component={MoneyCount} />
            <Route path="/result" component={DivideResult} />
        </Route>
  </Router>
);

export default routes;
