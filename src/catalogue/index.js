import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullCatalogue from './full_catalogue';
import Service from './service';
import GetAppUrl from '../common/helper';

const APP_ROOT_URL = GetAppUrl();

class Catalogue extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path={APP_ROOT_URL} component={FullCatalogue} />
        <Route path={`${APP_ROOT_URL}/:service`} component={Service} />
      </Switch>
    );
  }

}

export default Catalogue;
