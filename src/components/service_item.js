import React from 'react';
// import { Link } from 'react-router-dom';
import { getAppUrl } from '../common/helper';

const APP_ROOT = getAppUrl();

export default class ServiceItem extends React.Component {

  renderHTML(markup) {
    return { __html: markup };
  }

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
      <div className="service-item-container">
        <a href={APP_ROOT + this.props.name}>
          <img className="logo" src={this.props.logo} alt={this.props.name} />
        </a>
        <a href={APP_ROOT + this.props.name}>
          <h3 className="service-name">{ this.props.name }</h3>
        </a>
        {
          (this.props.service_area_ext) ?
            <div className="service-area">Service Area: { this.props.service_area_ext }</div> :
            ''
        }
        {
          (this.props.short_description) ?
            <div className="short-description" dangerouslySetInnerHTML={this.renderHTML(this.props.short_description)} /> :
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
          { (field.key === 'logo') ?
            <img src={field.value} alt={field.label} title={field.label} /> :
            <div className="value" dangerouslySetInnerHTML={this.renderHTML(field.value)} />
          }
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
