import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import './App.css';
import Monitor from './feature/monitor/Monitor';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { products : "" }
  }

  componentDidMount(){
      this.setState({products:[
        { productId: 1, productName: "Lobster Shrimp", unitPrice: "180", thumbnail: "/image/product/lobsters.jpg" },
        { productId: 2, productName: "Mussel", unitPrice: "120", thumbnail: "/image/product/mussel.jpg" },
        { productId: 3, productName: "Salmon Fish", unitPrice: "99", thumbnail: "/image/product/salmon.jpg" },
        { productId: 4, productName: "Sanma Fish", unitPrice: "115", thumbnail: "/image/product/sanma.jpg" },
    ]})
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products}/>
        <Footer creatorName="Dream" creatorMail="thitikan.hgcass@gmail.com" />
      </div>
    );
  }
}

export default App;
