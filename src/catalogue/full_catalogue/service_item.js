import React from 'react';
import { Link } from 'react-router-dom';
import ServiceLogo from '../common/service_logo.js';
import GetAppUrl from '../../common/helper';

const APP_ROOT_URL = GetAppUrl();

class ServiceItem extends React.Component {

  renderHtml(markup) {
    return { __html: markup };
  }

  renderUserTags() {
    let tags = [];

    tags = this.props.data.user_customers_list.user_customers.map((item, key) => {
      return <div className="user-tag" key={`service_item-${key}`}>{ item.name }</div>
    });

    return tags;
  }

  render() {
    return (
      <div className="service-item">
        <Link to={`${APP_ROOT_URL}/${this.props.data.name}`}>
          <ServiceLogo uuid={this.props.data.uuid} img_name={this.props.data.logo} />
        </Link>
        <Link to={`${APP_ROOT_URL}/${this.props.data.name}`}>
          <h3>{ this.props.data.name }</h3>
        </Link>
        <div className="service-area">Service Area: { this.props.data.service_area }</div>
        <p className="short-description" dangerouslySetInnerHTML={this.renderHtml(this.props.data.short_description)} />
        { (this.props.data.user_customers_list.count > 0) ? this.renderUserTags() : '' }
      </div>
    );
  }

}

export default ServiceItem;
