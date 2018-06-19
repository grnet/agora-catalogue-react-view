import React from 'react';

import ServiceItem from './service_item';

export default class ServiceArea extends React.Component {
  render() {
    return (
      <div className="service-area">
        <h1>{ this.props.label }</h1>
        <div className="services">
          { this.renderServices() }
        </div>
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
