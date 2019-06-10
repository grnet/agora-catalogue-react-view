import React from 'react';
import { groupBy } from 'lodash';
import { CatalogueConsumer } from '../context/catalogue';
import ServiceArea from './service_area';

const grouping_key = "service_categories_names";

export default class Catalogue extends React.Component {

  render() {
    return (
      <div className="services-list">
        <CatalogueConsumer>
          { (data) => {
            return this.groupServices(data.services);
          } }
        </CatalogueConsumer>
      </div>
    );
  }

  groupServices(services) {
    const groups = groupBy(services, (service) => {
      return (service[grouping_key]) ? service[grouping_key].split(";").shift() : 'undefined';
    })

    return Object.keys(groups).map((key, index) => {
      return (
        <ServiceArea key={index} label={key} services={groups[key]} />
      );
    });
  }

}
