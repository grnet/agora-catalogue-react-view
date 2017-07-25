import React from 'react';
import { Link } from 'react-router-dom';
import ServiceLogo from '../common/service_logo.js';

class ServiceItem extends React.Component {

  getImgUrl() {
    return `https://sp.eudat.eu/static/img/logos/${this.props.data.logo}`;
  }

  renderHtml(markup) {
    return {__html: markup};
  }

  renderUserTags() {
    let tags = [];
    tags = this.props.data.user_customers_list.user_customers.map((item) => {
      return <div className="user-tag">{ item.name }</div>
    });
    return tags;
  }

  render() {
    return (
      <div className="service-item">
        <ServiceLogo img_name={this.props.data.logo} />
        <h3>{ this.props.data.name }</h3>
        <div className="service-area">Service Area: { this.props.data.service_area }</div>
        <p className="short-description" dangerouslySetInnerHTML={this.renderHtml(this.props.data.short_description)} />
        { (this.props.data.user_customers_list.count > 0) ? this.renderUserTags() : '' }
        <Link to={`/catalogue/${this.props.data.service.name}`}>Read more </Link>
      </div>
    );
  }
}

export default ServiceItem;
