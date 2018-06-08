import React from 'react';
import Reflux from 'reflux';
import Actions from '../common/actions.js';
import Store from '../common/store.js';
import Spinner from 'react-spinkit';

class ContactInformation extends Reflux.Component {

  constructor() {
    super();
    this.state = {};
    this.store = Store;
    this.storeKeys = ['contact', 'contact_loaded'];
  }

  componentDidMount() {
    Actions.getContactInformation(this.props.data.links.self);
  }

  renderEmail() {
    return (
      <div className="contact-email">
        <div>Email: <a href={'mailto:' + this.state.contact.email}>{ this.state.contact.email }</a></div>
      </div>
    );
  }

  renderUrl() {
    return (
      <div className="contact-url">
        <a href={this.state.contact.url}>{ this.state.contact.url }</a>
      </div>
    );
  }

  renderContent() {
    return (
      <div className="contact-information">
        <h3>Helpdesk</h3>
        { (this.state.contact.email) ? this.renderEmail() : '' }
        { (this.state.contact.url) ? this.renderUrl() : '' }
      </div>
    );
  }

  render() {
    return (
      <div>
        { (this.state.contact_loaded) ?
          this.renderContent() :
          <Spinner name="circle" color="rgba(191,57,45,0.9)" fadeIn="quarter" />
        }
      </div>
    );
  }

}

export default ContactInformation;

