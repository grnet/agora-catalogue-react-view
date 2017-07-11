import React, { Component } from 'react';
import Header from './common/header.js';
import Footer from './common/footer.js';
import Layout from './common/layout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
