import React from 'react';

export default class ServiceItem extends React.Component {
  render() {
    return (
      <div className="service-item">
        { (this.props.extended) ? this.renderExtended() : this.renderSimple() }
      </div>
    )
  }

  renderSimple() {
    console.log(this.props);
    return  (
      <div>
        <img src={ this.props.logo } alt={ this.props.name } />
        <h3>{ this.props.name }</h3>
        {
          (this.props.service_area_ext) ?
            <div className="service-area">Service Area: {this.props.service_area_ext}</div> :
            ''
        }
        {
          (this.props.short_description) ?
            <div className="short-description">{this.props.short_description}</div> :
            ''
        }
        {
          (this.props.user_customers_ext.length > 0) ?
            <div className="user-tags">{this.renderUserTags(this.props.user_customers_ext)}</div> :
            ''
        }
      </div>
    );
  }

  renderExtended() {
    let fields = [];
    this.props.drupal_fields.forEach((field) => {
      if(this.props[field.field_key]) {
        fields.push({
          label: field.field_label,
          value: this.props[field.field_key]
        });
      }
    });
    return fields.map((field, index) => {
      return (
        <div key={index}>
          <h4>{field.label}</h4>
          <div>{field.value}</div>
        </div>
      );
    });
  }

  renderUserTags(tagStr) {
    const tokens = tagStr.split(',');
    return tokens.map((tag) => {
      return (
        <div className="user-tag">{tag}</div>
      );
    })
  }
}
