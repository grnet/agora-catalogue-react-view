import React from 'react';
import { find } from 'lodash';

import ServiceItem from './service_item';
import { CatalogueConsumer } from '../context/catalogue';

export default class Service extends React.Component {
  render() {
    return (
      <CatalogueConsumer>
        {data => { return this.renderService(data)} }
      </CatalogueConsumer>
    );
  }

  renderService(data) {
    const service = find(data.services, { 'name': this.props.match.params.service });
    return (service) ? <ServiceItem {...service} extended drupal_fields={data.config.fields} /> : '';
  }
}
