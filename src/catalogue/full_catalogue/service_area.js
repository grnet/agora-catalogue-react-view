import React from 'react';
import ServiceItem from './service_item.js';

class ServiceArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderServices() {
    return this.props.data.map((item, index) => {
      return (
        <ServiceItem key={index} data={item} />
      );
    });
  }

  render() {
    return (
      <div className="service-area">
        <h1>{ this.props.area }</h1>
        <div className="services">{ this.renderServices() }</div>
      </div>
    );
  }

}

export default ServiceArea;
