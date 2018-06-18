import React from 'react';
import { groupBy } from 'lodash';
import { CatalogueConsumer } from '../context/catalogue';
import ServiceArea from './service_area';

export default class Catalogue extends React.Component {

  render() {
    return (
      <CatalogueConsumer>
        {(data) => {
          return this.groupServices(data.services);
        }}
      </CatalogueConsumer>
    );
  }

  groupServices(services) {
    const groups = groupBy(services, (service) => {
      return (service.service_area) ? service.service_area_ext.name : 'undefined';
    })

    return Object.keys(groups).map((key, index) => {
      return (
        <ServiceArea key={index} label={key} services={groups[key]} />
      );
    });
  }

}
