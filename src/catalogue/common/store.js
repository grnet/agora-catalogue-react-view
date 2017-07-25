import Reflux from 'reflux';
import request from 'superagent';
import Actions from './actions';

const api = {
  services: 'https://agora-dev.vi-seem.eu/api/v1/catalogue/services'
};

class FullCatalogueStore extends Reflux.Store {
  constructor() {
    super();
    this.listenables = [ Actions ];
    this.state = {
      services: [],
      services_loaded: false,
      service_loaded: false,
      service: {}
    };
  }

  onGetServices() {
    this.setState({ services_loaded: false });
    request
      .get(api.services)
      .end((err, res) => {
        let services = [];
        if(res && res.body.data && res.body.data.services) {
          services = res.body.data.services;
        }
        this.setState({ services });
        this.setState({ services_loaded: true });
      });
  }

  onGetService(name) {
    this.setState({ service_loaded: false });
    request
      .get(api.services + name)
      .end((err, res) => {
        let service = {};
        if(res && res.body.data) {
          service = res.body.data;
        }
        this.setState({ service });
        this.setState({ service_loaded: true });
      });
  }
}

export default FullCatalogueStore;
