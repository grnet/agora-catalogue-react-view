import React from 'react';

import ServiceItem from './service_item';

export default class ServiceArea extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.label }</h1>
        { this.renderServices() }
      </div>
    );
  }

  renderServices() {
    return this.props.services.map((service) => {
      return (
        <ServiceItem {...service} key={service.id} />
      );
    });
  }
}
