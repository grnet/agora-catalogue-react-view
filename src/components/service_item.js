import React from 'react';
import { Link } from 'react-router-dom';
import { getAppUrl } from '../common/helper';

const APP_ROOT = getAppUrl();

export default class ServiceItem extends React.Component {

  render() {
    return (
      <div className="service-item">
        { (this.props.extended) ? this.renderExtended() : this.renderCompact() }
      </div>
    )
  }

  // render a short version of the service, for the list view page
  renderCompact() {
    return (
      <div>
        <Link to={APP_ROOT + this.props.name}>
          <img src={this.props.logo} alt={this.props.name} />
        </Link>
        <Link to={APP_ROOT + this.props.name}>
          <h3>{ this.props.name }</h3>
        </Link>
        {
          (this.props.service_area_ext) ?
            <div className="service-area">Service Area: { this.props.service_area_ext }</div> :
            ''
        }
        {
          (this.props.short_description) ?
            <div className="short-description">{ this.props.short_description }</div> :
            ''
        }
        {
          (this.props.user_customers_ext.length > 0) ?
            <div className="user-tags">{ this.renderUserTags(this.props.user_customers_ext) }</div> :
            ''
        }
      </div>
    );
  }

  // render all fields the user defined from drupal's spmt
  renderExtended() {
    let fields = [];

    this.props.drupal_fields.forEach((field) => {
      if(this.props[field.field_key]) {
        fields.push({
          label: field.field_label,
          value: this.props[field.field_key],
          key: field.field_key,
        });
      }
    });

    return fields.map((field, index) => {
      return (
        <div key={index} className={field.key}>
          <h4 className="label">{ field.label }</h4>
          <div className="value">{ field.value }</div>
        </div>
      );
    });
  }

  renderUserTags(tagStr) {
    const tokens = tagStr.split(',');

    return tokens.map((tag, index) => {
      return (
        <div key={index} className="user-tag">{ tag }</div>
      );
    })
  }

}
