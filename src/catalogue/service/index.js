import React from 'react';
import Reflux from 'reflux';
import Store from '../full_catalogue/full_catalogue_store.js';
import Actions from '../full_catalogue/full_catalogue_actions.js';

class Service extends Reflux.Component {
  constructor() {
    super();
    this.state = {};
    this.store = Store;
    this.storeKeys = ['service'];
  }

  componentDidMount() {
    Actions.getService(this.props.match.params.service);
  }

  render() {
    console.log(this.state)
    return (
      <div className="service">
        <h1>{ this.state.service.name }</h1>
      </div>
    );
  }
}

export default Service;
