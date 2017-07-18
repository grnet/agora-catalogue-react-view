import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalogue from '../catalogue';

class Layout extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/catalogue' component={Catalogue} />
      </Switch>
    );
  }
}

export default Layout;
