import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalogue from './components/catalogue';
import Service from './components/service';
import CatalogueProvider, { CatalogueConsumer } from './context/catalogue';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CatalogueProvider>
          <CatalogueConsumer>
            {(data) => (
              <Switch>
                <Route exact path={`/${data.config.page}`} component={Catalogue} />
                <Route path={`/${data.config.page}/:service`} component={Service} />
              </Switch>
            )}
          </CatalogueConsumer>
        </CatalogueProvider>
      </div>
    );
  }

}

export default App;
