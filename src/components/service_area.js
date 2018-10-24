import React from 'react';
import ServiceItem from './service_item';

export default class ServiceArea extends React.Component {

  render() {
    const classes = "service-area " + this.cleanInput(this.props.label);
    return (
      <div className={classes}>
        <h1 className="title">{ this.props.label }</h1>
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

  cleanInput(input) {
    const regex = /[^a-zA-Z0-9_-\s]/g;
    let str = input.replace(regex, '');
    return str.replace(/\s+/g, '_').toLowerCase();
  }

}
