import React, { Component } from 'react';

import TopBar from './components/TopBar';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <ProductsList />
        <Footer />
      </div>
    );
  }
}

export default App;
