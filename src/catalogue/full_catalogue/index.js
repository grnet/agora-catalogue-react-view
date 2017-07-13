import React from 'react';
import Reflux from 'reflux';
import Actions from '../common/actions.js';
import Store from '../common/store.js';
import ServiceItem from './service_item.js';

class FullService extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
    this.storeKeys = ['services'];
  }

  componentDidMount() {
    Actions.getServices();
  }

  renderList() {
    let items = [];
      items = this.state.services.map((item, index) => {
        return (
          <ServiceItem key={index} data={item} />
        );
      });
    return items;
  }

  render() {
    return (
      <div>
        <div className="services-list">
          { this.renderList() }
        </div>
      </div>
    );
  }
}

export default FullService;
