import React from 'react';

export default class ServiceItem extends React.Component {
  render() {
    return (
      <div>
        { (this.props.extended) ? this.renderExtended() : this.renderSimple() }
      </div>
    )
  }

  renderSimple() {
    return  (
      <div>
        <h3>{ this.props.name }</h3>
        <div>{ this.props.logo }</div>
        <div>{ this.props.short_description }</div>
        <div>{ (this.props.service_are_ext) ? this.props.service_area_ext.name : '' }</div>
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
}
