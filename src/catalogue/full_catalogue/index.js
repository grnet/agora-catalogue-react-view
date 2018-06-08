import React from 'react';
import Reflux from 'reflux';
import Spinner from 'react-spinkit';
import { groupBy } from 'lodash';
import Actions from '../common/actions.js';
import Store from '../common/store.js';
import ServiceArea from './service_area.js';

class FullService extends Reflux.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
    this.storeKeys = ['services', 'services_loaded'];
  }

  componentDidMount() {
    Actions.getServices();
    document.title = 'EUDAT Service Catalogue';
  }

  renderList() {
    let service_areas = groupBy(this.state.services, (item) => { return item.service_area });
    let items = [];

    items = Object.keys(service_areas).map((key, index) => {
      return (
        <ServiceArea key={index} area={key} data={service_areas[key]} />
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
