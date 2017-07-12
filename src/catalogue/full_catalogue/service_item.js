import React from 'react';
import { Link } from 'react-router-dom';
import ServiceLogo from '../common/service_logo.js';

class ServiceItem extends React.Component {

  getImgUrl() {
    return `https://sp.eudat.eu/static/img/logos/${this.props.data.logo}`;
  }

  render() {
    return (
      <div className="service-item">
        <ServiceLogo img_name={this.props.data.logo} />
        <h3>{ this.props.data.name }</h3>
        <div className="service-area">Service Area: { this.props.data.service_area }</div>
        <Link to={`/catalogue/${this.props.data.service.name}`}>Read more </Link>
      </div>
    );
  }
}

export default ServiceItem;
