import React from 'react';
import Reflux from 'reflux';
import Actions from '../common/actions.js';
import Store from '../common/store.js';
import DetailsItem from './details_item.js';
import ServiceLogo from '../common/service_logo.js';
import ContactInformation from '../common/contact_information.js';
import { orderBy } from 'lodash';
import Spinner from 'react-spinkit';

class Service extends Reflux.Component {
  constructor() {
    super();
    this.state = {};
    this.store = Store;
    this.storeKeys = ['service', 'service_loaded'];
  }

  componentDidMount() {
    Actions.getService(this.props.match.params.service);
  }

  renderHtml(markup) {
    return {__html: markup};
  }

  renderDetailsList() {
    let details = [];
    const list = orderBy(this.state.service.service_details_list.service_details, ['version'],['desc']);
    details = list.map((item, index) => {
      return (
        <DetailsItem data={item} key={index} service_name={this.state.service.name} />
      );
    });
    return details;
  }

  renderContent() {
    document.title = `${this.state.service.name} - EUDAT Service Catalogue`;
    return (
      <div className="service">
        <ServiceLogo img_name={this.state.service.logo} />
        <h1>{ this.state.service.name }</h1>
        <div className="request-procedures">
          <h3>How can you get access to { this.state.service.name }?</h3>
          <p dangerouslySetInnerHTML={this.renderHtml(this.state.service.request_procedures)} />
        </div>
        <div className="description-external">
          <h3>What is { this.state.service.name }?</h3>
          <p dangerouslySetInnerHTML={this.renderHtml(this.state.service.description_external)} />
        </div>
        <div className="added-value">
          <h3>What is the added value of { this.state.service.name }?</h3>
          <p dangerouslySetInnerHTML={this.renderHtml(this.state.service.value_to_customer)} />
        </div>
        { ( this.state.service.service_details_list && this.state.service.service_details_list.count > 0 ) ?
            this.renderDetailsList() : '' }
        { ( this.state.service.contact_information) ?
            <ContactInformation data={this.state.service.contact_information} /> :
            ''
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        { (this.state.service_loaded) ?
          this.renderContent() :
          <Spinner name="circle" color="rgba(191,57,45,0.9)" fadeIn="quarter" />
        }
      </div>
    );
  }
}

export default Service;
