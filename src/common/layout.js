import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalogue from '../catalogue';
import GetAppUrl from './helper';

const APP_ROOT_URL = GetAppUrl();

class Layout extends React.Component {

  render() {
    return (
      <Switch>
        <Route path={APP_ROOT_URL} component={Catalogue} />
      </Switch>
    );
  }
}

export default Layout;
