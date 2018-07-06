import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import ProductItem from './feature/product/ProductItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <ProductItem productName="Fish" unitPrice="35" />
          <ProductItem productName="Shrimp" unitPrice="65" />
          <ProductItem productName="Shell" unitPrice="40" />
        <Footer creatorName="Dream" creatorMail="thitikan.hgcass@gmail.com" />
      </div>
    );
  }
}

export default App;
