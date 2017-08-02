import React from 'react';

class ServiceLogo extends React.Component {

  getImgUrl() {
    return `https://agora-dev.vi-seem.eu/static/img/logos/${this.props.img_name}`;
  }

  render() {
    return (
      <div className="img-container">
        { (this.props.img_name) ?
          <img src={this.getImgUrl()} alt={this.props.img_alt} />
          : ''
        }
      </div>
    );
  }
}

export default ServiceLogo;
