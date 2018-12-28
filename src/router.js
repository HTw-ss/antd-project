import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import IndexPage from './routes/indexPage';
import MoreButton from './routes/moreButton';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <IndexRoute path="/" exact component={IndexPage} />
        <Route path="/routes/moreButton" exact component={MoreButton} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
