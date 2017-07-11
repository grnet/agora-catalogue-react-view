import Reflux from 'reflux';
import request from 'superagent';
import Actions from './full_catalogue_actions';

const api = {
  services: 'https://sp.eudat.eu/api/v1/catalogue/services/'
};

class FullCatalogueStore extends Reflux.Store {
  constructor() {
    super();
    this.listenables = [ Actions ];
    this.state = {
      services: [],
      service: {}
    };
  }

  onGetServices() {
    request
      .get(api.services)
      .end((err, res) => {
        let services = [];
        if(res.body.data && res.body.data.services) {
          services = res.body.data.services;
        }
        this.setState({ services });
      });
  }

  onGetService(name) {
    request
      .get(api.services + name)
      .end((err, res) => {
        let service = {};
        if(res.body.data) {
          service = res.body.data;
        }
        this.setState({ service });
      });
  }
}

export default FullCatalogueStore;
