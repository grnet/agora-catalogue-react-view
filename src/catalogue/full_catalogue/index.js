import React from 'react';
import Reflux from 'reflux';
import Actions from '../common/actions.js';
import Store from '../common/store.js';
import ServiceItem from './service_item.js';
import Spinner from 'react-spinkit';

class FullService extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
    this.storeKeys = ['services', 'services_loaded'];
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
          {
            (this.state.services_loaded) ?
            this.renderList() :
            <Spinner name="circle" color="rgba(191,57,45,0.9)" fadeIn="quarter" />
          }
        </div>
      </div>
    );
  }
}

export default FullService;
