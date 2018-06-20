import React from 'react';
import request from 'superagent';

const CatalogueContext = React.createContext();

const config = window.spmt;

export const CatalogueConsumer = CatalogueContext.Consumer;

export default class CatalogueProvider extends React.Component {

  // window.spmt
  // GET req server data

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    request
      .get(config.feed_url)
      .end((err, res) => {
        if(!err)
          this.setState({ data: res.body });
      })
  }

  render() {
    return (
      <CatalogueContext.Provider value={{ config, services: this.state.data }}>
        { this.props.children }
      </CatalogueContext.Provider>
    );
  }

}
