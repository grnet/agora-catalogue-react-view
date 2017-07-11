import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullCatalogue from './full_catalogue';
import Service from './service';

class Catalogue extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/catalogue' component={FullCatalogue} />
        <Route path='/catalogue/:service' component={Service} />
      </Switch>
    );
  }
}

export default Catalogue;
