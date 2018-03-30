import React from 'react';

class ServiceLogo extends React.Component {

  render() {
    return (
      <div className="img-container">
        { (this.props.img_name) ?
          <img src={this.props.img_name} alt={this.props.img_alt} />
          : ''
        }
      </div>
    );
  }

}

export default ServiceLogo;
