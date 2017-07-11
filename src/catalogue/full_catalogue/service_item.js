import React from 'react';
import { Link } from 'react-router-dom';

class ServiceItem extends React.Component {

  getImgUrl() {
    return `https://sp.eudat.eu/static/img/logos/${this.props.data.logo}`;
  }

  render() {
    return (
      <div className="service-item">
        <img src={this.getImgUrl()} alt={this.props.data.logo} />
        <h3>{ this.props.data.name }</h3>
        <Link to={`/catalogue/${this.props.data.service.name}`}>Read more </Link>
      </div>
    );
  }
}

export default ServiceItem;
